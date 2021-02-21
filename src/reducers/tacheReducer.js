import { v4 as uuidv4 } from "uuid";
export const initialState = [];
export const tacheReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TACHE":
      return [
        {
          id: uuidv4(),
          tacheName: action.payload.tacheName,
          tacheDescription: action.payload.tacheDescription,
          status: "Non complétée",
        },
        ...state,
      ];
    case "UPDATE_TACHE":
      let tacheUpdated = action.payload;
      let newState = state.filter((item) => item.id !== tacheUpdated.id);
      return [...newState, tacheUpdated];
    case "REMOVE_TACHE":
      return state.filter((tache) => tache.id !== action.payload);
    default:
      return state;
  }
};
