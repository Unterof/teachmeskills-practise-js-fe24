import {authAPI, captchaAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "auth-reducer/SET_USER_DATA";
const GET_CAPTCHA = "auth-reducer/GET_CAPTCHA"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth},
});

export const setCaptchaUrl = (captcha) => ({
    type: GET_CAPTCHA,
    payload: {captcha}
})

export const getMeAuthorized = () => async (dispatch) => {

    let response = await authAPI.me();

    if (response.data.resultCode === 0) {

        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const loginMe = (email, password, rememberMe,captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe,captcha);

    if (response.data.resultCode === 0) {
        dispatch(getMeAuthorized());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        const message = response.data.messages.length > 0
            ? response.data.messages[0]
            : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
};

export const logoutMe = () => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await captchaAPI.getCaptchaUrl();
    const captchaUrl = response.data.url

    dispatch(setCaptchaUrl(captchaUrl));

};

export default authReducer;
