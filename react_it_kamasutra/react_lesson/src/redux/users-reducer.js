import {usersAPI} from "../api/api";
import { updateObjectInArray } from "../utils/helpers/object-helpers";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const SET_TOGGLE_STATUS = 'SET_TOGGLE_STATUS'
const SET_FOLLOWING_PROGRESS = 'SET_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    newPostText: '',
    pageSize:10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress : []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users : updateObjectInArray(state.users,action.userId,'id',{ followed : true })
                // users: state.users.map(e => {
                //     if (e.id === action.userId) {
                
                //         return {...e, followed: true}
                
                //     }
                //     return e
                
                
                // })
            }

        case UNFOLLOW :
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId,'id',{followed : false})
                // users: state.users.map(e => {
                //     if (e.id === action.userId) {


                //         return {...e, followed: false}

                //     }
                //     return e;
                // })
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
        case SET_FOLLOWING_PROGRESS : {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }





         default:
            return state
        }
    }


export const followSuccess = (userId) => ( {type: FOLLOW, userId});


export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});

export const setUsers = (users) => ({type: SET_USERS, users});

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const setTotalUserCount = (count) => ({type: SET_TOTAL_USER_COUNT, count});

export const setToggleStatus = (isFetching) => ({type: SET_TOGGLE_STATUS, isFetching});

export const setFollowingProgress = (isFetching, userId) => ({type: SET_FOLLOWING_PROGRESS, isFetching, userId});

export const requestUsers = (page, pageSize) =>
    async (dispatch) => {

    dispatch(setToggleStatus(true))
    let data = await usersAPI.getUsers(page, pageSize)

    dispatch(setToggleStatus(false))
    dispatch(setCurrentPage(page))

    dispatch(setUsers(data.items))
    dispatch(setTotalUserCount(data.totalCount))

}
const followUnfollowFlow = async (dispatch,userId,apiMethod,actionCreator) => {
    dispatch(setFollowingProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.data.resultCode === 0) {

        dispatch(actionCreator(userId))
    }
    dispatch(setFollowingProgress(false, userId))
}


export const unfollowUser = (userId) =>
    async (dispatch) => {
        let apiMethod = usersAPI.unfollow.bind(usersAPI);
        followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess)

    }

export const followUser = (userId) =>
    async (dispatch) => {
        let apiMethod = usersAPI.follow.bind(usersAPI);
        followUnfollowFlow(dispatch, userId, apiMethod, followSuccess)

    }

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