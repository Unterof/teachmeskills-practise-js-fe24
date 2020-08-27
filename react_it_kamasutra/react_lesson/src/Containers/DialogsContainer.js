import Dialogs from "../Components/Dialogs/Dialogs";
import {sendMessageCreator, updateNewMessageCreator} from "../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsItems: state.dialogsItems,

    }
}



export default  compose(connect(mapStateToProps,{sendMessageCreator,updateNewMessageCreator}),withAuthRedirect)(Dialogs)








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