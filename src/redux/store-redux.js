import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer
})

const store = createStore(reducers)

export default store