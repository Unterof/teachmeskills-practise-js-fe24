const updateNewMessage = 'UPDATE-NEW-MESSAGE';
const sendMessage = 'SEND_MESSAGE';

let initialState = {
    images: [
        {name: "Kirill", img: "/images/avatar/1.jpg"},
        {name: "Dmitry", img: "/images/avatar/2.jpg"},
        {name: "Ksenya", img: "/images/avatar/3.jpg"},
        {name: "Valery", img: "/images/avatar/4.jpg"},
        {name: "Zohan", img: "/images/avatar/5.jpg"}


    ]
    ,
    dialogs: [

        {name: "Kirill", message: "Hi", id: 1},
        {name: "Dmitry", message: "Hello how are you?", id: 2},
        {name: "Ksenya", message: "I have enough time", id: 3},
        {name: "Valery", message: "You need to learn javascript more!", id: 4},
        {name: "Zohan", message: "Men you look crazy", id: 5},


    ],

    newMessageItem: '',


}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case updateNewMessage:
            state.newMessageItem = action.item;
            return state;
        case sendMessage :
            let item = state.newMessageItem;
            state.newMessageItem = '';
            let dialogItem = {
                name: 'Petruha',
                message: item,
                id: 6
            }
            state.dialogs.push(dialogItem)
            return state;
        default :
            return state;
    }

}

export default dialogsReducer;