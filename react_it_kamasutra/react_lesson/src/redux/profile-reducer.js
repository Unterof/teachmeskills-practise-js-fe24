const addPost = 'ADD-POST';
const updatePost = 'UPDATE-POST';

let initialState = {
    posts: [

        {id: 1, message: "Hello, I'm trying to understand prop's in react", likesCount: 5},
        {id: 2, message: "Good luck man", likesCount: 24}
    ],

    newPostText: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case addPost :
            let newPost = {
            id: 3,
            message: state.newPostText,
            likesCount: 0
        };
            return {
                ...state,
               posts: [...state.posts,newPost],
                newPostText: ''
            }
        case updatePost :
            return {
                ...state,
                newPostText: action.newText
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