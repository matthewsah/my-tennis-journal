import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar.component.tsx";
import Logs from "./components/logs.component.tsx";
import Login from "./components/login.component.tsx";
import CreatePrePracticeLog from "./components/create-pre-practice-log.component.tsx"
import CreatePostPracticeLog from "./components/create-post-practice-log.component.tsx"

import "bootstrap/dist/css/bootstrap.min.css"

console.warn = console.error = () => {};

function App() {
  const [currentUser, setCurrentUser] = useState(window.localStorage.getItem('user') ? window.localStorage.getItem('user') : undefined);
  function newLogin(user) {
    console.log('setting new user to be ', user);
    setCurrentUser(user);
    console.log('currentUser:', currentUser)
  }

  return (
    <Router> 
      <div className="container">
      <Navbar currentUser={currentUser}/> 
        <br/> 
        <Routes> 
          <Route path="/" exact element={<Logs currentUser={currentUser}/>} /> 
          <Route path="/createprepracticelog" element={<CreatePrePracticeLog currentUser={currentUser}/>} /> 
          <Route path="/createpostpracticelog" element={<CreatePostPracticeLog currentUser={currentUser}/>} /> 
          <Route path="/account" element={<Login currentUser={currentUser} changeUser={newLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
