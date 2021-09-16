const axios = require("axios");
const { Router } = require("express");
const { Temperamentos } = require("../db");
const router = Router();
const { API_KEY } = process.env;

router.get("/", async function (req, res) {
  let allTemp = await Temperamentos.findAll();

  res.json(allTemp);
});

module.exports = router;
