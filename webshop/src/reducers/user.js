import update from 'immutability-helper';

const initialState = {
    userLogin: '',
    userPassword: '',
    users: [{
        id: 1,
        username: 'vasya',
        password: 'aysav',
    }, {
        id: 2,
        username: 'petya',
        password: 'aytep',
    }],
    authenticated: false,
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'USER/LOGIN_CHANGED':
            return update(state, {
                $merge:
                    {
                        userLogin: action.payload.value,
                    }
            });
        case 'USER/PASSWORD_CHANGED':
            return update(state, {
                $merge:
                    {
                        userPassword: action.payload.value,
                    }
            });
        case 'USER/SUBMIT_LOGIN_FORM':
            let authenticated = false;

            initialState.users.forEach((user) => {
                if (user.username === state.userLogin && user.password === state.userPassword) {
                    authenticated = true;
                }
            });

            return update(state, {
                $merge:
                    {
                        authenticated,
                    }
            });
        default:
            return state
    }
}

export default userReducer;