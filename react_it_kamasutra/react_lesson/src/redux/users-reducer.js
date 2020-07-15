const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const SET_TOGGLE_STATUS = 'SET_TOGGLE_STATUS'

let initialState = {
    users: [],
    newPostText: '',
    pageSize:10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(e => {
                    if (e.id === action.userId) {

                        return {...e, followed: true}

                    }
                    return e

                })
            }

        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(e => {
                    if (e.id === action.userId) {


                        return {...e, followed: false}

                    }
                    return e;
                })
            }

        case SET_USERS : {
            return {...state, users: action.users}
            }
        case SET_CURRENT_PAGE : {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USER_COUNT : {
            return {...state, totalUserCount: action.count}
        }
        case SET_TOGGLE_STATUS : {
            return {...state, isFetching: action.isFetching}
        }

         default:
            return state
        }
    }



export const follow = (userId) => {
    return {type: FOLLOW, userId};
};

export const unfollow = (userId) => {
    return {type: UNFOLLOW, userId};
};

export const setUsers = (users) => {
    return  {type: SET_USERS, users}
};

export const setCurrentPage = (currentPage) => {
    return  {type: SET_CURRENT_PAGE, currentPage}
};
export const setTotalUserCount = (count) => {
    return  {type: SET_TOTAL_USER_COUNT, count}
};
export const setToggleStatus = (isFetching) => {
    return  {type: SET_TOGGLE_STATUS, isFetching}
};

export default usersReducer

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