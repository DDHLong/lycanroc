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
    case "UPDATE_PLAYER":
      console.log("UPDATE", payload.players.type);
      return {
        ...state,
        players: state.players.map((player, i) =>
          player.name === payload.players.name
            ? { ...player, [payload.players.type]: payload.players[payload.players.type] }
            : player
        ),
      };
    default:
      throw new Error(`No case for type ${type} found in roleReducer.`);
  }
};

export default roleReducer;
