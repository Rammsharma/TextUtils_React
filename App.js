
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');//dark mode enable or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0d1d36';
      showAlert("Dark Mode Enabled ", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light Mode Enabled ", "success")

    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert Alert={alert} />
        <div className="container my-3"/>
        <Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route>
          <Route path="/">
          <TextForm heading="Enter the Text to Analyze " mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
        </Router> 
          <div/>
    </>
  );
}
export default App;
