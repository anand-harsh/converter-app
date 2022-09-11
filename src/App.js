

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './About';
import React, {useState} from 'react';
import Alert from './Alert';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }


  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
      showAlert("Dark mode has been enabled", "success")
      document.title='ConVo-Dark'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='#212529'
      showAlert("Light mode has been enabled", "success")

    }
  }
  return (
    <>
    {/* title is made here */}
<Router>
<Navbar title="ConVo" aboutText="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container my-3'>
    <Routes>
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="UPPERCASE Converter" mode={mode}/>}>
      </Route>
      <Route exact path="/about" element={<About />}>
      </Route>
    </Routes>
    </div>
  </Router>
  </>
  );
}

export default App;
