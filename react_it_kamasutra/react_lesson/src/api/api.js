import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    headers: {
        "API-KEY": "2ec176f6-8255-419b-9266-91536d0dd2c5",
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data;
            });
    },

    follow(user = 1) {
        return instance.post(`follow/${user}`);
    },

    unfollow(user = 1) {
        return instance.delete(`follow/${user}`);
    },

    profileUser(id) {
        console.warn("Obsolete method! ProfileAPI object");
        return profileAPI.getProfileUser(id);
    },
};

export const profileAPI = {
    getProfileUser(id) {
        return instance.get(`profile/` + id).then((response) => {
            return response.data;
        });
    },

    getStatus(id) {
        return instance.get(`profile/status/` + id);
    },

    updateStatus(status)  {
        return instance.put(`profile/status/`, {
            status
        })
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`)

    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {
            email,
            password,
            rememberMe
        });
    },
    logout() {
        return instance.delete(`auth/login`)
    },
};
