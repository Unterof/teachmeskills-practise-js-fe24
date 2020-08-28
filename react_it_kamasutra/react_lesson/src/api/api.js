import axios from "axios";

const instance = axios.create({
    withCredentials : true,
    headers: {
        "API-KEY": "2ec176f6-8255-419b-9266-91536d0dd2c5"
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                    return response.data
                }
            )
    },

    follow (user = 1,) {
            return instance.post(`follow/${user}`)
        },

    unfollow(user = 1) {
        return instance.delete(`follow/${user}`)
    },

    profileUser(id){

        console.warn('Obsolete method! ProfileAPI object')
        return profileAPI.profileUser(id)


    },

    authMe(){
        return instance.get(`auth/me`)
    }

}

export const profileAPI = {
    profileUser(id){

        return instance.get(`profile/`+id).then(response => {
            return response.data

        })
    },

    getStatus(id){
        return instance.get(`profile/status`+id).then(responce => {
            return responce.data
        })
    },

    updateStatus(status) {
        return instance.put(`profile/status`,{status})
    }



}






