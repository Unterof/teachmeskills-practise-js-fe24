export const getUsers = (state) => {
    return state.usersSection.users

}

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


