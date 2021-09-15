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
const { Raza } = require("./src/db.js");
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
// aca configuramos todo
// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  let dogsApi = await axios.get("https://api.thedogapi.com/v1/breeds");
  await Raza.bulkCreate(
    dogsApi.data &&
      dogsApi.data.map((e) => ({
        name: e.name,
        height: e.height.metric,
        weight: e.weight.metric,
        life_span: e.life_span,
        image: e.image.url,
      }))
  );
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
