import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  players: [],
  totalPlayers: 0,
  addPlayer: (player) =>
    set((state) => ({
      players: [...state.players, player],
      totalPlayers: state.totalPlayers + 1,
    })),
  removePlayer: (index) =>
    set((state) => ({
      players: state.players.filter((_, i) => i !== index),
      totalPlayers: state.totalPlayers - 1,
    })),
  clearPlayers: () =>
    set({
      players: [],
      totalPlayers: 0,
    }),
  updatePlayer: (name, updatedFields) =>
    set((state) => ({
      players: state.players.map((player) => {
        if (player.name === name) {
          return { ...player, ...updatedFields };
        }
        return player;
      }),
    })),
}));

export const usePlayStore = create((set) => ({
  isPlay: false,
  setIsPlay: (value) => set({ isPlay: value }),
}));
