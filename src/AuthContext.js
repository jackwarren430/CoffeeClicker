import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState({});
  const [accounts, setAccounts] = useState({
    'jack.warren': 'password'
  });

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
    if (accounts[username] && accounts[username] == password) {
        setLoggedIn(true);
        setCurrentAccount({username, password});
    }
  }

  const logout = (username, password) => {
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
