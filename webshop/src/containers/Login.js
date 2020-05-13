import {connect} from 'react-redux';
import Login from "../components/Login";

const mapStateToProps = state => {
    return {
        newItem: state.todo.newItem,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        newItemChanged: (e) => dispatch({
            type: 'USER/SUBMIT_LOGIN_FORM',
            payload: {
                value: e.target.value,
            }
        }),
        onSubmit: () => dispatch({
            type: 'TODO/NEW_ITEM_SUBMITTED',
        }),
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);