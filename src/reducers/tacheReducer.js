import { v4 as uuidv4 } from "uuid";
export const initialState = [];
export const tacheReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TACHE":
      return [
        ...state,
        {
          id: uuidv4(),
          tacheName: action.payload.tacheName,
          tacheDescription: action.payload.tacheDescription,
          status: "Non complétée",
        },
      ];
    case "REMOVE_TACHE":
      return state.filter((tache) => tache.id !== action.payload);
    default:
      return state;
  }
};
