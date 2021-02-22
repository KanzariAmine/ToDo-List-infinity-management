export const initialState = false;
export const authReducer = (state, action) => {
  switch (action.type) {
    case "IS_AUTHENTICATED":
      if (
        action.payload.email === "test@test.com" &&
        action.payload.password === "test"
      ) {
        return true;
      } else {
        return false;
      }

    default:
      return state;
  }
};
