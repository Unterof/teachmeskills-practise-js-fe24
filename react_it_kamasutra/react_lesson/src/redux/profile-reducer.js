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
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case updatePost :
            state.newPostText = action.newText;
            return state;
        default :
            return state;

    }
}
export default profileReducer;