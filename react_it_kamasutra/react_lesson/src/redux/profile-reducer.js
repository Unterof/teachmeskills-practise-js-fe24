import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const addPost = "ADD-POST";

const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const SAVE_USER_PHOTO = "SAVE_USER_PHOTO";


let initialState = {
    posts: [

        {id: 1, message: "Hello, I'm trying to understand prop's in react", likesCount: 5},
        {id: 2, message: "Good luck man", likesCount: 24}
    ],

    profile: null,
    status:""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case addPost : {
            let newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                
            }
        }

        case SET_USER_PROFILE :{
            return {   ...state,
                profile: action.profile

            }
        }

        case SET_USER_STATUS :{
            return {   ...state,
                status: action.status

            }
        }
        case SAVE_USER_PHOTO :{
            return {   ...state,
                profile: {...state.profile, photos:action.photo}

            }
        }

    
        default :
            return state;


    }
}

export const addPostActionCreator = (newPostText) => ({type: addPost,newPostText})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile });

export const setUserStatus = (status) => {
    return {type: SET_USER_STATUS, status };
};

export const setUserPhoto = (photo) => {
    return {type: SAVE_USER_PHOTO, photo };
};

export const getUserStatus = (userId) =>
    async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(response.data))

    }

export const updateUserStatus = (status) =>
    async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }

    }

export const updateUserPhoto = (file) =>
    async (dispatch) => {
        let response = await profileAPI.saveUserPhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(setUserPhoto(response.data.data.photos))
        }

    }

export const profileUserThunk = (userId) =>
    async (dispatch) => {
        if (!userId) {
            userId = 9401
        }
        let data = await usersAPI.profileUser(userId)
        dispatch(setUserProfile(data))

    }

    export const saveProfile = (profile) =>
    async (dispatch,getState) => {
        
        const userId = getState().auth.userId
        
        let response = await profileAPI.saveProfile(profile)
        if (response.data.resultCode === 0) {
            dispatch(profileUserThunk(userId))
        } else {

            dispatch(stopSubmit("edit-profile", {_error:response.data.messages[0]}))
            return Promise.reject(response.data.messages[0])
        }

    }

export default profileReducer;

//-------------- до рефакторинга ---------------------------

// switch (action.type) {
//     case addPost :
//         let newPost = {
//             id: 3,
//             message: state.newPostText,
//             likesCount: 0
//         };
//
//         let newState = {...state};
//         newState.posts = [...state.posts];
//         newState.newPostText = {...state.posts};
//         newState.posts.push(newPost);
//         newState.newPostText = '';
//
//
//         return newState
//     case updatePost :
//         let newState = {...state}
//         newState.newPostText = action.newText;
//
//
//         return newState;
//
//     default :
//         return state;