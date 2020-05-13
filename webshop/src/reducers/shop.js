import update from 'immutability-helper';

const initialState = {
    searchQuery: '',
};

function shopReducer(state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_TEXT_CHANGED':
            return update(state, {
                $merge:
                    {searchQuery: action.payload}
            });
        default:
            return state
    }
}

export default shopReducer;