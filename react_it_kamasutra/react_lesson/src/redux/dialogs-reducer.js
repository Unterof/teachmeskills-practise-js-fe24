const updateNewMessage = 'UPDATE-NEW-MESSAGE';
const sendMessage = 'SEND_MESSAGE';

let initialState = {
    images: [
        {id: 1, name: "Kirill", img: "/images/avatar/1.jpg"},
        {id: 2, name: "Dmitry", img: "/images/avatar/2.jpg"},
        {id: 3, name: "Ksenya", img: "/images/avatar/3.jpg"},
        {id: 4, name: "Valery", img: "/images/avatar/4.jpg"},
        {id: 5, name: "Zohan", img: "/images/avatar/5.jpg"}


    ]
    ,
    dialogs: [

        {name: "Kirill", message: "Hi", id: 1},
        {name: "Dmitry", message: "Hello how are you?", id: 2},
        {name: "Ksenya", message: "Have you ever seen an ocean?", id: 3},
        {name: "Valery", message: "You need to learn javascript more!", id: 4},
        {name: "Zohan", message: "Man you look crazy", id: 5},


    ],

    newMessageItem: '',


}

const dialogsReducer = (state = initialState, action) => {
 switch (action.type) {
        case updateNewMessage:
          return {
               ...state,
               newMessageItem : action.item
           };


        case sendMessage : {
             let item = state.newMessageItem;
             return {
               ...state,
               newMessageItem: '',
               dialogs: [...state.dialogs,{name: 'Petruha',message: item,id: 6}]
           };
        }
        default :
            return state;


    }

}
export const updateNewMessageCreator = (item) => {
    return { type: updateNewMessage, item: item };
};

export const sendMessageCreator = () => {
    return { type: sendMessage };
};

export default dialogsReducer;



//------ до рефакторинга ------------------
// const dialogsReducer = (state = initialState, action) => {
//
//     let newState = {
//         ...state,
//         messages: [...state.dialogs]
//     };
//
//     switch (action.type) {
//         case updateNewMessage: {
//             newState.newMessageItem = action.item;
//             return newState;
//         }
//
//         case sendMessage : {
//
//
//             let item = newState.newMessageItem;
//             newState.newMessageItem = '';
//             let dialogItem = {
//                 name: 'Petruha',
//                 message: item,
//                 id: 6
//             }
//             newState.dialogs.push(dialogItem)
//             return newState;
//         }
//         default :
//             return state;
//
//
//     }
//
// }

// --------------- 2ой рефакторинг--------------------------

// const dialogsReducer = (state = initialState, action) => {
//
//     let stateCopy;
//
//     switch (action.type) {
//         case updateNewMessage:
//             stateCopy = {
//                 ...state,
//                 newMessageItem : action.item
//             }
//             return stateCopy;
//
//
//         case sendMessage : {
//             let item = state.newMessageItem;
//             stateCopy = {
//                 ...state,
//                 newMessageItem: '',
//                 dialogs: [...state.dialogs,{name: 'Petruha',message: item,id: 6}]
//             }
//             return stateCopy;
//         }
//         default :
//             return state;
//
//
//     }
//
// }