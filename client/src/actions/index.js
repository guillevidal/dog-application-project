import axios from 'axios';
export const GET_BREEDS = 'GET_BREEDS';
export const GET_BREEDS_ID = 'GET_BREEDS_ID'

//---------------------Obetner las razas, para cargarlo en el estado-------------
export function getBreeds(){
    return dispatch =>{
        return axios.get('http://localhost:3001/dogs').then(obj =>{
            dispatch({
                type:GET_BREEDS,
                payload:obj.data
            })
        })
    }
}
//--------------------Obtener la raza, para cargarla en el estado-----------------
export function getBreedsID(id){
    return dispatch =>{
        return axios.get(`http://localhost:3001/dogs/${id}`).then(obj =>{
            dispatch({
                type:GET_BREEDS_ID,
                payload:obj.data
            })
        })
    }
}