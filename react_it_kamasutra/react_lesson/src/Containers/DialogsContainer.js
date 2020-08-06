import Dialogs from "../Components/Dialogs/Dialogs";
import {sendMessageCreator, updateNewMessageCreator} from "../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogsItems: state.dialogsItems,

    }
}



export default  withAuthRedirect(connect (mapStateToProps,{sendMessageCreator,updateNewMessageCreator})(Dialogs))








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