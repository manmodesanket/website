import { ACTIONS, GLOBAL_STATE } from "../types/DataType.types";

export const dataReducer = (state: GLOBAL_STATE, action: ACTIONS) => {
  switch (action.type) {
    case "MODE_CHANGE":
      return {
        ...state,
        mode: action.payload.mode,
      };
    default:
      return state;
  }
};
