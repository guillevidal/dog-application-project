const axios = require("axios");
const { Router } = require("express");
const { Raza, Temperamentos } = require("../db");
const router = Router();
const { v4: uuidv4 } = require("uuid");

router.post("/", async function (req, res) {
  const breed = req.body;
  try {
    const createDog = await Raza.create(
      {
        id: uuidv4(),
        name: breed.name,
        height: breed.height,
        weight: breed.weight,
        life_span: breed.life_span,
        image: breed.image,
      },
      { fields: ["id", "name", "height", "weight", "life_span", "image"] }
    );

    for (let i = 0; i < breed.temperament.length; i++) {
      // let find = await Temperamentos.findOrCreate({
      //   where: {
      //     name: breed.temperament[i],
      //   },
      //   attributes: ["id"],
      // });

      let tempId = await Temperamentos.findOne({
        where: { name: breed.temperament[i] },
      });
      await createDog.addTemperamentos(tempId.id);
    }

    res.json(createDog);
  } catch (e) {
    res.status(500).send("no se puedo crear al perro");
  }
});

module.exports = router;
