const axios = require("axios");
const { Router } = require("express");
const { Raza } = require("../db");

const router = Router();

router.get("/", async function (req, res, next) {
  axios.get("https://api.thedogapi.com/v1/breeds").then(function (e) {
    let dogsApi = e.data;
    let dogsDb = Raza.findAll();
    let allDogs = dogsApi.concat(dogsDb);
    res.send(allDogs);
  });
});

module.exports = router;

/* const getRaza = await Raza.findAll();
res.json(getRaza); */

/*     Raza.bulkCreate(
      e.data?.map((e) => ({
        name: e.data.name,
        height: e.data.height.metric,
        weight: e.data.weight,
        life_span: e.data.life_span,
      }))
    ) */
