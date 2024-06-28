import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import AuthContext from './AuthContext';


function LoginPage() {

    const { login, accounts } = useContext(AuthContext);

    const navigate = useNavigate();
    const navigateSignup = () => {
        navigate('/signup');
    };

    const handleSubmit = () => {
        if (accounts[username] == password) {
            login(username, password);
            navigate('/');
        }
    }

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    return (
        <div className='Login-Page'>
            <h1>Login</h1>
            <h3 onClick={navigateSignup}>Sign Up</h3>
            <form className='login-form' onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
                <input type="text" value={password} onChange={(event) => setPassword(event.target.value)}/>
                <input className='submit-button' type="submit"/>
            </form>
        </div>
    );
}

export default LoginPage;