import './App.css';
import Navbar from './Components/Navbar';
// import About from './Components/About'
import TextFrom from './Components/TextForm';
import About from './Components/About';
// import { Switch, Route } from "react-router-dom"; 

import React, { useState } from 'react'
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // wheather dark mode is enabled or note
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);

    }, 1500

    );
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enable", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      <Router>

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element = {<About />}>
              
            </Route>
            <Route path="/" element = {<TextFrom showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}>

            </Route>

          </Routes>
        </div>
      </Router>


    </>

  );
}

export default App;
