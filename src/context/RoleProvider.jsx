import { createContext, useContext, useReducer } from "react";
import roleReducer, { initialState } from "./roleReducer";

export const RoleContext = createContext(initialState);

const RoleProvider = (props) => {
  const [state, dispatch] = useReducer(roleReducer, initialState);

  const addPlayer = (player) => {
    const updatedPlayer = state.players.concat(player);

    dispatch({
      type: "ADD_PLAYER",
      payload: {
        players: updatedPlayer,
      },
    });
  };

  const updatePlayer = (player) => {
    dispatch({
      type: "UPDATE_ROLE",
      payload: {
        players: player,
      },
    });
  };

  const value = {
    total: state.total,
    players: state.players,
    addPlayer,
    updatePlayer,
  };

  return <RoleContext.Provider value={value} {...props} />;
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("Missing provider");
  }
  return context;
};

export default RoleProvider;
