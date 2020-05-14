import update from 'immutability-helper';

const initialState = {
    products: [],
    cartItems: [],
};

function shopReducer(state = initialState, action) {
    switch (action.type) {
        case 'SHOP/SAVE_DATA':
            return update(state, {
                products: {
                    $push: action.payload.data,
                }
            });
        case 'SHOP/ADD_TOD_CART':
            if (!action.payload.id || state.cartItems.includes(action.payload.id)) {
                return state;
            }

            return update(state, {
                cartItems: {
                    $push: [action.payload.id],
                }
            });
        default:
            return state
    }
}

export default shopReducer;