import { createSelector } from "reselect";

 const getUsersSelector = (state) => {
    return state.usersSection.users

}
// в качестве примера , в данном случае используется криэйт селектор!!!
export const getUsers = createSelector(getUsersSelector, (users) => {
        return users.filter(u => true)
})


export const getPageSize = (state) => {
    return state.usersSection.pageSize
}

export const getTotalUserCount = (state) => {
    return state.usersSection.totalUserCount
}

export const getCurrentPage = (state) => {
    return state.usersSection.currentPage
}

export const getIsFetching = (state) => {
    return state.usersSection.isFetching
}

export const getFollowingInProgress= (state) => {
    return state.usersSection.followingInProgress
}


