import React, { useState } from 'react';

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let changeUsername = (e) => {
        setUsername(e.target.value);
    };

    let changePassword = (e) => {
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
            .then((data) => console.log(data));
        e.preventDefault();
    };

    let signUp = (e) => {
        let userInfo = { username: username, password: password };
        console.log(userInfo)
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
            .then((data) => console.log(data));
    };

    let test = () => {
        fetch('/api/getInfo')
    }

    return (
        <form>
            <label for="username-sign-in">Username</label>
            <input
                type="text"
                id="username-sign-in"
                onChange={changeUsername}
            />
            <br />
            <label for="password-sign-in">Password</label>
            <input
                type="password"
                id="password-sign-in"
                onChange={changePassword}
            />
            <br />
            <button type="button" onClick={signIn}>
                Sign In
            </button>
            <button type="button" onClick={signUp}>
                Sign Up
            </button>
            <button type="button" onClick={test}> test</button>
        </form>
    );
}

export default SignIn;
