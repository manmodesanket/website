export type GLOBAL_STATE = {
  mode: string;
};

export type ACTIONS = { type: "MODE_CHANGE"; payload: { mode: string } };

export type DATA_CONTEXT = {
  data: GLOBAL_STATE;
  dispatch: React.Dispatch<ACTIONS>;
};
