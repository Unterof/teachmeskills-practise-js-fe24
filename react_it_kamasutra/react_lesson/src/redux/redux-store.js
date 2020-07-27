import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    postsSection:profileReducer,
    dialogsItems :dialogsReducer,
    sidebarSection:sidebarReducer,
    usersSection: usersReducer,
    auth: authReducer,

   
})

let store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store

export default store;