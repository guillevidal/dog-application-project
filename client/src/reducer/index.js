import { GET_BREEDS, GET_BREEDS_ID } from "../actions";

 const initialState = {
   breeds:[],
   breedsDetail:[]
  };
 

const reducer = (state = initialState, action) => {
  switch(action.type) {
   case GET_BREEDS:
     return {...state,
       breeds: action.payload 
     }
   case GET_BREEDS_ID:
     return {...state,
       breedsDetail: action.payload 
    }

   default:
     return state    
  
  }
}

export default reducer;