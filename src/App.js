import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Navbar from './components/Navbar';
import CaseChange from './components/CaseChange';
import Alert from './components/Alert';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Notfound from './components/Notfound';
import Copyright from './components/Copyright';

function App(){
const [mode,setMode] = useState('light');
const [alert,setAlert] = useState(null);
const showAlert = (message,type)=>{
  setAlert({
    msg: message,
    type: type
  });
  setTimeout(()=>{
    setAlert(null);
  },1000);
}
const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor='#2b2b2b';
  }else{
    setMode('light');
    document.body.style.backgroundColor='#ffffff';
  }
}
  return(
    <BrowserRouter>
      <div className="main">
        <div className="App">
          <Navbar title="Change Case" mode={mode} toggleMode={toggleMode}/>
          <div className="container vp-height">
            <Alert alert={alert}/>
            <Routes>
              <Route exact path='/' element={<CaseChange mode={mode} showAlert={showAlert}/>}/>
              <Route exact path='/about' element={<About mode={mode}/>} />
              <Route exact path='/how-it-works' element={<HowItWorks mode={mode}/>} />
              <Route path='*' element={<Notfound mode={mode}/>} />
            </Routes>
          </div>
          <Copyright mode={mode} toggleMode={toggleMode}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;