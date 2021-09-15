const { Router } = require("express");
const { Raza } = require("../db");
const { Op } = require("sequelize");
const router = Router();

router.get("/", async function (req, res, next) {
  let { name } = req.query;
  try {
    if (name) {
      let queryName = await Raza.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
      });
      res.json(queryName);
    } else {
      let queryAll = await Raza.findAll();
      res.json(queryAll);
    }
  } catch (error) {
    res.status(400).send(error);
  }

  /*  } catch (e) {
    res.status(400).send("ERROR NO SE ENCONTRARON LOS CANES");
  } */
});

router.get("/:idRaza", async (req, res) => {
  const { idRaza } = req.params;
  try {
    let idDog = await Raza.findOne({ where: { id: idRaza } });
    if (idDog) {
      res.json(idDog);
    }
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
});

module.exports = router;
