import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    // currentAccount
  const [currentAccount, setCurrentAccount] = useState(() => {
    const savedCurrentAccount = localStorage.getItem('currentAccount');
    return savedCurrentAccount ? JSON.parse(savedCurrentAccount) : {};
  });

  const [accounts, setAccounts] = useState({
    'jack.warren': 'password'
  });

  useEffect(() => {
    localStorage.setItem('currentAccount', JSON.stringify(currentAccount));
  }, [currentAccount]);

   // Add Account function
  const addAccount = (username, password) => {
    if (!accounts[username]) {
        setAccounts(prevAccounts => ({
            ...prevAccounts,
            [username]: password
        }));
    }
  };

  const [loggedIn, setLoggedIn] = useState(false);
  const login = (username, password) => {
    if (accounts[username] && accounts[username] === password) {
        setLoggedIn(true);
        setCurrentAccount({username, password});
    }
  }

  const logout = () => {
     setLoggedIn(false);
     setCurrentAccount({});
  }

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout, accounts, addAccount, currentAccount}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
