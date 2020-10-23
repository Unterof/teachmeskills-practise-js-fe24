import { getMeAuthorized } from "./auth-reducer";

const SET_INITIALIZED_USER = "SET_INITIALIZED_USER";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED_USER:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({ type: SET_INITIALIZED_USER });

export const initializeApp = () =>
 async (dispatch) => {
  let authPromise = await dispatch(getMeAuthorized());
  Promise.all([authPromise]);
   dispatch(initializedSuccess())
};

export default appReducer;
