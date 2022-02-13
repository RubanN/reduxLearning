import { combineReducers } from "redux";
import { auth, counter, } from "./counterReducer"

export const allReducers = combineReducers({
    counter,
    auth,
})


