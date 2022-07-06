import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react'
import Alert from './component/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor ='rgb(57 58 59)';
      setTheme();
      showAlert('success','Dark Mode Has Been Enabled');
      
    } else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      setTheme();
      showAlert('success','Light Mode Has Been Enabled');  
    }
  }

  const [alert, setalert] = useState(null);

  const showAlert = (type,alertMsg) =>{
    setalert({
      type: type,
      alertMsg: alertMsg
    });

    setTimeout(() => {
      setalert(null)
    },2000);
  }

  const [textFormTheme, setTextFormTheme] = useState({
    btnTheme:'outline-secondary',
    textColor: 'dark',
    backgroundColor:'white',
    navbarTheme:'light',
  });
    
  const setTheme = () =>{
    if (mode === 'light') {
      setTextFormTheme({
        btnTheme:'dark',
        textColor:'white',
        backgroundColor:'rgb(57 58 59)',
        navbarTheme:'dark',
      });
    } else {
      setTextFormTheme({
        btnTheme:'outline-secondary',
        textColor: 'dark',
        backgroundColor:'white',
        navbarTheme:'light',
      });
    }
}

  return (
    <>
    {/* <Router> */}
     <Navbar title="TextUtils" about="About TextUtil" toggleMode={toggleMode} textFormTheme={textFormTheme}/>
      <Alert alert={alert}/>
        <div className="container">
          {/* <Switch> */}
              {/* <Route exact path="/about"> */}
                {/* <About /> */}
              {/* </Route> */}
              {/* <Route exact path="/"> */}
                <TextForm heading="Enter Text to Analyze: " mode={mode} showAlert={showAlert} textFormTheme={textFormTheme}/>
              {/* </Route> */}
          {/* </Switch> */}
        </div>
    {/* </Router> */}
    </>
  );
}

export default App;
