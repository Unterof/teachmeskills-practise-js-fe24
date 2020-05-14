
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

function Login({login, password, onLoginChanged, onPasswordChanged, onSubmit, authenticated}) {
    useEffect(() => {
        if (authenticated === true) {
            alert('Success!');
        }
    }, [authenticated]);

    function submit(e) {
        e.preventDefault();

        onSubmit();
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input
                        value={login}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter username"
                        onChange={onLoginChanged}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        value={password}
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={onPasswordChanged}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

Login.proppTypes = {
    login: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onLoginChanged: PropTypes.func.isRequired,
    onPasswordChanged: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    authenticated: PropTypes.bool,
};

export default Login;

