import {
  GET_BREEDS,
  GET_BREEDS_ID,
  GET_BREEDS_NAME,
  CLEAN,
  ASCENDING,
  DESCENDING,
  GET_TEMPERAMENTS,
  FILTRADOS,
} from "../actions";

const initialState = {
  breeds: [],
  breedsDetail: [],
  breedsName: [],
  temperaments: [],
  filtrados: [],
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
    case ASCENDING:
      if (action.payload === "alphabetic") {
        return {
          ...state,
          breeds: [...state.breeds].sort((a, b) =>
            [a.name].join() > [b.name].join() ? 1 : -1
          ),
        };
      } else {
        return {
          ...state,
          breeds: [...state.breeds].sort((a, b) => {
            const arrayA = a[action.payload].split(" - ");
            const arrayB = b[action.payload].split(" - ");

            const promedioA = (arrayA[0] + arrayA[1] ? arrayA[1] : 0) / 2;
            const promedioB = (arrayB[0] + arrayB[1] ? arrayB[1] : 0) / 2;

            return promedioA > promedioB ? 1 : -1;
          }),
        };
      }
    case DESCENDING:
      if (action.payload === "alphabetic") {
        return {
          ...state,
          breeds: [...state.breeds].sort((a, b) =>
            [a.name].join() < [b.name].join() ? 1 : -1
          ),
        };
      } else {
        return {
          ...state,
          breeds: [...state.breeds].sort((a, b) => {
            const arrayA = a.weight.split(" - ");
            const arrayB = b.weight.split(" - ");

            const promedioA = (+arrayA[0] + +arrayA[1] ? +arrayA[1] : 0) / 2;
            const promedioB = (+arrayB[0] + +arrayB[1] ? +arrayB[1] : 0) / 2;

            return promedioA > promedioB ? -1 : 1;
          }),
        };
      }
    case GET_TEMPERAMENTS:
      return { ...state, temperaments: action.payload };
    default:
      return state;
  }
};

export default reducer;
