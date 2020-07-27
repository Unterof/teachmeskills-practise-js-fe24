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
            .then(responce => {
                    return responce.data
                }
            )
    },
    getUsers2: {
        postUser (user = 1,) {
            return instance.post(`follow/${user}`).then(responce => {

                return responce.data

            })
        },

            deleteUser(user = 1){
                return instance.delete(`follow/${user}`).then(responce => {

                    return responce.data

                })
            }

    }

}





