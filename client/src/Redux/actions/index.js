import axios from "axios";
export const GET_BREEDS = "GET_BREEDS";
export const GET_BREEDS_ID = "GET_BREEDS_ID";
export const GET_BREEDS_NAME = "GET_BREEDS_NAME";
export const CLEAN = "CLEAN";
export const ASCENDING = "ASCENDING";
export const DESCENDING = "DESCENDING";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const FILTRADOS = "FILTRADOS";

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
//-------------------------limpiar la el componente de la busqueda anterior --------
export function clean() {
  return {
    type: CLEAN,
    payload: [],
  };
}
//------------------------Ordenamiento------------------
export function orderBy(order, category) {
  return {
    type: order === "ascending" ? ASCENDING : DESCENDING,
    payload: category,
  };
}
//--------------obtener los temperamentos----------------
export function getTemperaments() {
  return (dispatch) => {
    return axios.get("http://localhost:3001/temperament").then((obj) => {
      dispatch({
        type: GET_TEMPERAMENTS,
        payload: obj.data,
      });
    });
  };
}
