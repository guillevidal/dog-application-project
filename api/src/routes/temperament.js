const axios = require("axios");
const { Router } = require("express");
const { Temperamentos } = require("../db");
const router = Router();

router.get("/", async function (req, res) {
  /*   let tempApi = await axios.get("https://api.thedogapi.com/v1/breeds");
  await Temperamentos.bulkCreate(
    tempApi.data &&
      tempApi.data.map((e) => ({
        name: e.temperament,
      }))
  );
  let allTemp = await Temperamentos.findAll();

  res.json(allTemp); */
});

module.exports = router;
