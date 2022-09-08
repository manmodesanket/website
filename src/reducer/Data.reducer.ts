import { ACTIONS, GLOBAL_STATE } from "../types/DataType.types";

export const dataReducer = (state: GLOBAL_STATE, action: ACTIONS) => {
  switch (action.type) {
    case "MODE_CHANGE":
      if (action.payload.mode === "moon") {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
      return {
        ...state,
        mode: action.payload.mode,
      };
    default:
      return state;
  }
};
