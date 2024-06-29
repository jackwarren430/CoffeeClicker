import './App.css';
import React, { useContext, createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import HomePage from './HomePage';
import { AuthProvider } from './AuthContext';
import AuthContext from './AuthContext';
import ReactDOM from 'react-dom';


ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);


function App() {

  const { loggedIn } = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={< Navigate to={ loggedIn ? '/home' : '/login' } />}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/home' element={<HomePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
