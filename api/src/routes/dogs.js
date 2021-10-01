const { Router } = require("express");
const router = Router();
const {
  allDogsApi,
  allDogsDb,
  querySearch,
  searchByParams,
} = require("../controller");

router.get("/", async function (req, res, next) {
  let { name } = req.query;
  let dogsApi = await allDogsApi();
  let dogsFiltered = dogsApi?.filter((el) => !el.weight.includes("NaN"));
  let allDogsDataBase = await allDogsDb();
  let allDogs = dogsFiltered.concat(allDogsDataBase);
  try {
    if (name) {
      let query = await querySearch(name);
      res.json(query);
    } else {
      res.json(allDogs);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  let byParams = await searchByParams(id);
  try {
    res.send(byParams);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
