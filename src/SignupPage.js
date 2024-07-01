import './SignupPage.css';
import { useNavigate } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';
import AuthContext from './AuthContext';


function SignupPage() {
    const { login, accounts, addAccount, currentAccount } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    };

    const handleSubmit = () => {
        if (!accounts[username]) {
            addAccount(username, password);
            login(username, password);
            navigate('/');
        }
    }

    useEffect(() => {
        if (currentAccount && !(Object.keys(currentAccount).length === 0)) {
            login(currentAccount["username"], currentAccount["password"]);
            navigate('/home');
        }
        setIsLoading(false);
    }, [navigate, currentAccount, login]);

    if (isLoading) {
        return(<div> Loading... </div>);
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