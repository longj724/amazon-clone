import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useStyles from '../css/signInStyle';

function SignIn() {
    const classes = useStyles();
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const changeUsername = (e) => {
        setUsername(e.target.value);
    };

    const changePassword = (e) => {
        setPassword(e.target.value);
    };

    let signIn = (e) => {
        let userInfo = { username: username, password: password };
        fetch('/auth/signin', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(userInfo),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.auth) {
                    history.push('/')
                } else {
                    setErrorMessage(data.message)
                }
            });
        e.preventDefault();
    };

    const signUp = (e) => {
        let userInfo = { username: username, password: password };

        fetch('/auth/signup', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(userInfo),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.auth) {
                    history.push('/')
                } else {
                    setErrorMessage(data.message)
                }
            });
    };

    const test = () => {
        fetch('/api/getInfo');
    };

    return (
        <div className={classes.login}>
            <Link to="/">
                {/* <img
                    src='https://i.pinimg.com/originals/08/5f/d8/085fd8f7819dee3b716da73d3b2de61c.jpg/
                1024px-Amazon_logo.svg.png'
                /> */}
                <h1>Amazon</h1>
            </Link>

            <div className={classes.loginContainer}>
                <h1>Sign In</h1>
                <form>
                    <h5>Username</h5>
                    <input
                        onChange={changeUsername}
                        value={username}
                        type="text"
                    />

                    <h5>Password</h5>
                    <input
                        onChange={changePassword}
                        value={password}
                        type="password"
                    />

                    <button
                        type="submit"
                        onClick={signIn}
                        className={classes.loginSignInButton}
                    >
                        Sign In
                    </button>
                    <p>{errorMessage}</p>
                </form>

                <button
                    onClick={signUp}
                    className={classes.loginRegisterButton}
                >
                    Create Account
                </button>
            </div>
        </div>
    );
}

export default SignIn;
