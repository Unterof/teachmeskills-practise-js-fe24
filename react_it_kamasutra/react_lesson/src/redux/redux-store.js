import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk"

let reducers = combineReducers({
    postsSection:profileReducer,
    dialogsItems :dialogsReducer,
    sidebarSection:sidebarReducer,
    usersSection: usersReducer,
    auth: authReducer,

   
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,composeEnhancer(applyMiddleware(thunk)));

window.store = store

export default store;