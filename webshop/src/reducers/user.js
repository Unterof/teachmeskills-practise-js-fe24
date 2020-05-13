import update from 'immutability-helper';

const initialState = {
    searchQuery: '',
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case '':
            return update(state, {
                $merge:
                    {searchQuery: action.payload}
            });
        default:
            return state
    }
}

export default userReducer;