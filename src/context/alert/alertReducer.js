import { SHOW_ALERT, HIDE_ALERT } from "../types";

const handlers = {
    [SHOW_ALERT]: (state, action) => action.payload,
    [HIDE_ALERT]: () => null,
    DEFAULT: state => state
}

export const alertReducer = (state, action) => {
    const hanlder = handlers[action.type] || handlers.DEFAULT;
    return hanlder(state, action);
}