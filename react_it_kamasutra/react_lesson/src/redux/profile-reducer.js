import {profileAPI, usersAPI} from "../api/api";

const addPost = "ADD-POST";

const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

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
        default :
            return state;


    }
}

export const addPostActionCreator = (newPostText) => {
    return {type: addPost,newPostText};
};


export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile };
};

export const setUserStatus = (status) => {
    return {type: SET_USER_STATUS, status };
};

export const getUserStatus = (userId) => {
    return (dispatch) => {
   profileAPI.getStatus(userId).then(response=>{
       dispatch(setUserStatus(response.data))
   })
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {

            profileAPI.updateStatus(status).then(response=>{
                if (response.data.resultCode === 0){
                dispatch(setUserStatus(status))
        }

        })
    }
}


export const profileUserThunk = (userId) => {
    return (dispatch) => {
    if (!userId) {
        userId = 2
    }
    usersAPI.profileUser(userId).then(data => {
        dispatch(setUserProfile(data))
    })
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