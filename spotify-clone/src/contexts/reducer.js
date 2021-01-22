export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // remove after finished developing
  // token: null,
  token:
    "BQByhBbclZAMes85URA71zBoZluu-3Y9u2GB5i1gATe5Rj_R2E…2rL3pi2teUDYafDetj73eIzZsTxHZyVQOJ8ddguqyvkYezJuw",
};

// ...state keeps whatever is in the current state
// ACtion => type,
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
