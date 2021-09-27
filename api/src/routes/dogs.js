const { Router } = require("express");
const { API_KEY } = process.env;
const { Raza, Temperamentos } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");
const router = Router();

router.get("/", async function (req, res, next) {
  let { name } = req.query;
  let dogsApi = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
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
  let dogsDb = await Raza.findAll({
    include: {
      model: Temperamentos,
    },
  });
  let dogsDbe = dogsDb.map((el) => {
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
  let allDogs = dogsApiMap.concat(dogsDbe);

  try {
    if (name) {
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

      res.json(busquedaPerrosApi.concat(consultaA));
    } else {
      res.json(allDogs);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  let dogsApi = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
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

  try {
    console.log(id);
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
      objte && res.send(objte);
    } else {
      for (let i = 0; i < dogsApiMap.length - 1; i++) {
        if (dogsApiMap[i].id == id) {
          let mostrar = dogsApiMap[i];
          res.send(mostrar);
        }
      }
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
