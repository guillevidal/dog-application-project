const axios = require("axios");
const { Router } = require("express");
const { Raza } = require("../db");
const router = Router();

router.post("/", async function (req, res) {
  const { name, height, weight, life_span } = req.body;
  try {
    let createDog = await Raza.create(
      {
        name: name,
        height: height,
        weight: weight,
        life_span: life_span,
      },
      { fields: ["name", "height", "weight", "life_span"] }
    );
    if (createDog) {
      return res.json({ createDog });
    }
  } catch (e) {
    res
      .status(500)
      .send(
        "NO PUDIMOS CREAR AL PERRITO MALVADO AGARRAS CARAVANA BASUUURA, sepa comprender"
      );
  }
});

module.exports = router;
