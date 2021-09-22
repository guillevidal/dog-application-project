const { Router } = require("express");
const { API_KEY } = process.env;
const { Raza } = require("../db");
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
      weight: el.weight.metric,
      temperament: el.temperament,
      image: el.image.url,
    };
    return obj;
  });
  let dogsDb = await Raza.findAll();
  let allDogs = dogsApiMap.concat(dogsDb);

  try {
    if (name) {
      var rutaBusqueda = await axios.get(
        `https://api.thedogapi.com/v1/breeds/search?q=${name}`
      );

      var busquedaPerrosApi = rutaBusqueda.data?.map((el) => {
        obj = {
          id: el.id,
          name: el.name,
          weight: el.weight.metric,
          temperament: el.temperament,
          image: `https://cdn2.thedogapi.com/images/${el.reference_image_id}.jpg`,
        };
        return obj;
      });
      let consulta = await Raza.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });
      res.json(busquedaPerrosApi.concat(consulta));
    } else {
      res.json(allDogs);
      // for (let i = 0; i < allDogs.length; i++) {
      //   if (allDogs[i].name == name) {
      //     let mostrar = allDogs[i];
      //     res.json(mostrar);
      //   }
      // }
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/:idRaza", async (req, res) => {
  const { idRaza } = req.params;
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
  let dogsDb = await Raza.findAll();
  let allDogs = dogsApiMap.concat(dogsDb);

  try {
    if (!idRaza) {
      res.send("EL PERRO CON ESE ID NO EXISTE");
    } else {
      for (let i = 0; i < allDogs.length - 1; i++) {
        if (allDogs[i].id == idRaza) {
          let mostrar = allDogs[i];
          res.send(mostrar);
        }
      }
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;

/*   let { name } = req.query;
  try {
    if (name) {
      let queryName = await Raza.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
      });
      res.json(queryName);
    } else {
      let queryAll = await Raza.findAll();
      res.json(queryAll);
    } */
