import { SET_COACH } from "./actions";

export function coachReducer(state = null, action) {
    switch (action.type) {
        case SET_COACH:
            return action.data
        default:
            return state;
    }
}