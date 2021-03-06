import axios from "axios";


const instance = axios.create({
    withCredentials:true,
    headers: {
        "API-KEY": "2ec176f6-8255-419b-9266-91536d0dd2c5",
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
});

export const usersAPI = {
  async getUsers(currentPage = 1, pageSize = 10) {
    let response = await instance.get(`users?page=${currentPage}&count=${pageSize}`)
    return response.data
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
   async getProfileUser(id) {
        let response = await instance.get(`profile/` + id)
            return response.data;
        
    },

    getStatus(id) {
        return instance.get(`profile/status/` + id);
    },

    updateStatus(status)  {
        return instance.put(`profile/status/`, {
            status
        })
    },

    saveUserPhoto(file)  {
        const formData = new FormData();
        formData.append('image',file)
        return instance.put(`profile/photo/`, formData ,{
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        })
    },
    saveProfile(profile) {
        return instance.put(`profile/`, profile
        )}
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`)

    },
    login(email, password, rememberMe,captcha = null) {
        return instance.post(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        });
    },
    logout() {
        return instance.delete(`auth/login`)
    },
};

export const captchaAPI = {
    getCaptchaUrl () {
        return instance.get('security/get-captcha-url')
    }
}
