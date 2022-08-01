import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar.component.tsx";
import Logs from "./components/logs.component.tsx";
import Login from "./components/login.component.tsx";
import CreatePrePracticeLog from "./components/create-pre-practice-log.component.tsx"
import CreatePostPracticeLog from "./components/create-post-practice-log.component.tsx"

function App() {
  return (
    <Router> 
      <div className="container">
      <Navbar /> 
        <br/> 
        <Routes> 
          <Route path="/" exact element={<Logs />} /> 
          <Route path="/createprepracticelog" element={<CreatePrePracticeLog />} /> 
          <Route path="/createpostpracticelog" element={<CreatePostPracticeLog />} /> 
          <Route path="/login" element={<Login />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
