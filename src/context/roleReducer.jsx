export const initialState = {
  total: 0,
  players: [],
};

const roleReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_PLAYER":
      console.log("ADD_PLAYER", payload);
      return {
        ...state,
        players: payload.players,
      };
    default:
      throw new Error(`No case for type ${type} found in roleReducer.`);
  }
};

export default roleReducer;
