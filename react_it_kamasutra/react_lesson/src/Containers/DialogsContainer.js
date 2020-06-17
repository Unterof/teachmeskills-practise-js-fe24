import Dialogs from "../Components/Dialogs/Dialogs";
import {sendMessageCreator, updateNewMessageCreator} from "../redux/dialogs-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsItems: state.dialogsItems
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessageCreator :() => {
            dispatch(sendMessageCreator())
        },
        onSendMessageClick : (text) => {
            dispatch(updateNewMessageCreator(text))
        }
    }

}

const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (Dialogs)






export default DialogsContainer;

//------- старая версия---------------

// const DialogsContainer = (props) => {
//
//     let state = props.store.getState().dialogsItems
//
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator())
//     }
//
//     let onChangeMessageText = (text) => {
//
//         props.store.dispatch(updateNewMessageCreator(text))
//     }
//
//
//     return <Dialogs onSendMessageClick={onChangeMessageText}
//                     sendMessageCreator={onSendMessageClick}
//                     dialogsItems={state} />
//
//
// };