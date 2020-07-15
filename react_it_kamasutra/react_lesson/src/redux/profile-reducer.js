const addPost = "ADD-POST";
const updatePost = "UPDATE-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts: [

        {id: 1, message: "Hello, I'm trying to understand prop's in react", likesCount: 5},
        {id: 2, message: "Good luck man", likesCount: 24}
    ],

    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case addPost : {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case updatePost : {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE :{
            return {   ...state,
                profile: action.profile

            }
        }
        default :
            return state;


    }
}

export const addPostActionCreator = () => {
    return {type: addPost};
};

export const onPostChangeActionCreator = (text) => {
    return {type: updatePost, newText: text};
};

export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile };
};

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