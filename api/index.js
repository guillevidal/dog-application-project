//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const axios = require("axios");
const { Temperamentos } = require("./src/db.js");
const server = require("./src/app.js");
const { API_KEY } = process.env;
const { conn } = require("./src/db.js");
// aca configuramos todo
// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  let dogsApi = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=f3474742-5031-4de3-96d6-9424ee04e1c2`
  );
  let array = [];
  let arr = dogsApi.data.map((el) => {
    return {
      temperament: [el.temperament].join().split(","),
    };
  });
  for (let j of arr) {
    for (let i = 0; i < j.temperament.length; i++) {
      array.push(j.temperament[i].trim());
    }
  }
  const temperamentosF = [...new Set(array)];
  const temperamentosFINAL = temperamentosF.sort();

  await Temperamentos.bulkCreate(
    temperamentosFINAL &&
      temperamentosFINAL.map((e) => ({
        name: e,
      }))
  );
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
