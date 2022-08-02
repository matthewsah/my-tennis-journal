import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar.component.tsx";
import Logs from "./components/logs.component.tsx";
import Login from "./components/login.component.tsx";
import CreatePrePracticeLog from "./components/create-pre-practice-log.component.tsx"
import CreatePostPracticeLog from "./components/create-post-practice-log.component.tsx"

// create function to pass down to Login component that edits the currentUser

function App() {
  const [currentUser, setCurrentUser] = useState(undefined)
  function newLogin(user) {
    setCurrentUser(user);
  }

  return (
    <Router> 
      <div className="container">
      <Navbar /> 
        <br/> 
        <Routes> 
          <Route path="/" exact element={<Logs />} /> 
          <Route path="/createprepracticelog" element={<CreatePrePracticeLog />} /> 
          <Route path="/createpostpracticelog" element={<CreatePostPracticeLog />} /> 
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/login" element={<Login currentUser={currentUser} changeUser={newLogin} />} />
          {/* add current user to login page props */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
