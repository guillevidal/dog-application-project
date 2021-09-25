import { GET_BREEDS, GET_BREEDS_ID, GET_BREEDS_NAME, CLEAN } from "../actions";

const initialState = {
  breeds: [],
  breedsDetail: [],
  breedsName: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BREEDS:
      return { ...state, breeds: action.payload };
    case GET_BREEDS_ID:
      return { ...state, breedsDetail: action.payload };
    case GET_BREEDS_NAME:
      return { ...state, breedsName: action.payload };
    case CLEAN:
      return { ...state, breedsName: action.payload };
    default:
      return state;
  }
};

export default reducer;
