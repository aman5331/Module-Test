// reducers.js
import { ADD_TO_HISTORY } from "./actions";

const initialState = {
  history: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      return {
        ...state,
        history: [action.payload, ...state.history],
      };
    default:
      return state;
  }
};

export default rootReducer;
