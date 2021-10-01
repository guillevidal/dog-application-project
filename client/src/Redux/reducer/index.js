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
            [a.name].join().toLowerCase() > [b.name].join().toLowerCase()
              ? 1
              : -1
          ),
        };
      } else {
        return {
          ...state,
          breeds: [...state.breeds].sort((a, b) => {
            let arrayA = a.weight.split(" - ");
            let arrayB = b.weight.split(" - ");
            let sumArrayA = parseInt(arrayA[0]) + parseInt(arrayA[1]);
            let sumArrayB = parseInt(arrayB[0]) + parseInt(arrayB[1]);

            let promedioA = sumArrayA ? sumArrayA / 2 : parseInt(arrayA[0]);
            let promedioB = sumArrayB ? sumArrayB / 2 : parseInt(arrayB[0]);

            return promedioA > promedioB ? 1 : -1;
          }),
        };
      }
    case DESCENDING:
      if (action.payload === "alphabetic") {
        return {
          ...state,
          breeds: [...state.breeds].sort((a, b) =>
            [a.name].join().toLowerCase() < [b.name].join().toLowerCase()
              ? 1
              : -1
          ),
        };
      } else {
        return {
          ...state,
          breeds: [...state.breeds].sort((a, b) => {
            let arrayA = a.weight.split(" - ");
            let arrayB = b.weight.split(" - ");
            let sumArrayA = parseInt(arrayA[0]) + parseInt(arrayA[1]);
            let sumArrayB = parseInt(arrayB[0]) + parseInt(arrayB[1]);

            let promedioA = sumArrayA ? sumArrayA / 2 : parseInt(arrayA[0]);
            let promedioB = sumArrayB ? sumArrayB / 2 : parseInt(arrayB[0]);

            return promedioA < promedioB ? 1 : -1;
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
