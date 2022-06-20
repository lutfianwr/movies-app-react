const initialState = {
  favorites: [],
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FAVORITES":
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
};
