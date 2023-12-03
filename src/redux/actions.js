export const ADD_TO_HISTORY = "ADD_TO_HISTORY";

export const addToHistory = (word) => ({
  type: ADD_TO_HISTORY,
  payload: word,
});
