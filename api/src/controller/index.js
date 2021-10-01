const { Raza, Temperamentos } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");
//const { API_KEY } = process.env;

module.exports = {
  allDogsApi: async function () {
    let dogsApi = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=f3474742-5031-4de3-96d6-9424ee04e1c2`
    );
    let dogsApiMap = dogsApi.data.map((el) => {
      obj = {
        id: el.id,
        name: el.name,
        height: el.height.metric,
        weight: el.weight.metric,
        life_span: el.life_span,
        image: el.image.url,
        temperament: el.temperament,
      };
      return obj;
    });
    return dogsApiMap;
  },
  allDogsDb: async function () {
    let dogsDb = await Raza.findAll({
      include: {
        model: Temperamentos,
      },
    });
    let dogsDbMap = dogsDb.map((el) => {
      obj = {
        id: el.id,
        name: el.name,
        height: el.height,
        weight: el.weight,
        life_span: el.life_span,
        image: el.image,
        temperament: el.temperamentos.map((temp) => temp.name).join(", "),
      };
      return obj;
    });
    return dogsDbMap;
  },
  querySearch: async function (name) {
    var rutaBusqueda = await axios.get(
      `https://api.thedogapi.com/v1/breeds/search?q=${name}`
    );

    var busquedaPerrosApi = rutaBusqueda.data?.map((el) => {
      obj = {
        id: el.id,
        name: el.name,
        height: el.height.metric,
        weight: el.weight.metric,
        life_span: el.life_span,
        image: `https://cdn2.thedogapi.com/images/${el.reference_image_id}.jpg`,
        temperament: el.temperament,
      };
      return obj;
    });
    let consulta = await Raza.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: {
        model: Temperamentos,
        attributes: ["name"],
      },
    });
    let consultaA = consulta.map((el) => {
      objte = {
        id: el.id,
        name: el.name,
        height: el.height,
        weight: el.weight,
        life_span: el.life_span,
        image: el.image,
        temperament: el.temperamentos.map((temp) => temp.name).join(", "),
      };
      return objte;
    });
    let submit = busquedaPerrosApi.concat(consultaA);
    return submit;
  },
  searchByParams: async function (id) {
    let dogsApi = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=f3474742-5031-4de3-96d6-9424ee04e1c2`
    );
    let dogsApiMap = dogsApi.data.map((el) => {
      obj = {
        id: el.id,
        name: el.name,
        height: el.height.metric,
        weight: el.weight.metric,
        life_span: el.life_span,
        image: el.image.url,
        temperament: el.temperament,
      };
      return obj;
    });
    if (id.length > 4) {
      let razaId = await Raza.findByPk(id, { include: [Temperamentos] });
      let objte = {
        id: razaId.id,
        name: razaId.name,
        height: razaId.height,
        weight: razaId.weight,
        life_span: razaId.life_span,
        image: razaId.image,
        temperament: razaId.temperamentos.map((temp) => temp.name).join(", "),
      };
      return objte;
    } else {
      for (let i = 0; i < dogsApiMap.length - 1; i++) {
        if (dogsApiMap[i].id == id) {
          let mostrar = dogsApiMap[i];
          return mostrar;
        }
      }
    }
  },
};
