import axios from "axios";
export const GET_BREEDS = "GET_BREEDS";
export const GET_BREEDS_ID = "GET_BREEDS_ID";
export const GET_BREEDS_NAME = "GET_BREEDS_NAME";
export const CLEAN = "CLEAN";

//---------------------Obetner las razas, para cargarlo en el estado-------------
export function getBreeds() {
  return (dispatch) => {
    return axios.get("http://localhost:3001/dogs").then((obj) => {
      dispatch({
        type: GET_BREEDS,
        payload: obj.data,
      });
    });
  };
}
//---------------------Obetner el detalle de la raza por id-------------
export function getBreedsId(id) {
  return (dispatch) => {
    return axios.get("http://localhost:3001/dogs/" + id).then((obj) => {
      dispatch({
        type: GET_BREEDS_ID,
        payload: obj.data,
      });
    });
  };
}
//---------------------obtener los perros buscados por el input-------------
export function getBreedsName(name) {
  return (dispatch) => {
    return axios.get("http://localhost:3001/dogs?name=" + name).then((obj) => {
      dispatch({
        type: GET_BREEDS_NAME,
        payload: obj.data,
      });
    });
  };
}
//-------------------------
export function clean() {
  return {
    type: CLEAN,
    payload: [],
  };
}
