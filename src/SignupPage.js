import './SignupPage.css';
import { useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import AuthContext from './AuthContext';


function SignupPage() {
    const { login, accounts, addAccount } = useContext(AuthContext);

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    };

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    const handleSubmit = () => {
        if (!accounts[username]) {
            addAccount(username, password);
            login(username, password);
            navigate('/');
        }
    }


    return (
        <div className='Signup-Page'>
            <h1>Sign Up</h1>
            <h3 onClick={navigateLogin}>Login</h3>
            <form className='login-form' onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
                <input type="text" value={password} onChange={(event) => setPassword(event.target.value)}/>
                <input className='submit-button' type="submit"/>
            </form>
        </div>
    );
}

export default SignupPage;