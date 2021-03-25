import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { usersReducer } from "./users-reducer";



const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer
})

const store = createStore(reducers)

window.store = store



export default store