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

//-----Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
//Si no existe ninguna raza de perro mostrar un mensaje adecuado----

module.exports = router;
