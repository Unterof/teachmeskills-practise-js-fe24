import {connect} from 'react-redux';
import Login from "../components/Login";

const mapStateToProps = state => {
    return {
        login: state.user.userLogin,
        password: state.user.userPassword,
        authenticated: state.user.authenticated,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onSubmit: () => dispatch({
            type: 'USER/SUBMIT_LOGIN_FORM',
        }),
        onLoginChanged: (e) => dispatch({
            type: 'USER/LOGIN_CHANGED',
            payload: {
                value: e.target.value,
            }
        }),
        onPasswordChanged: (e) => dispatch({
            type: 'USER/PASSWORD_CHANGED',
            payload: {
                value: e.target.value,
            }
        }),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);