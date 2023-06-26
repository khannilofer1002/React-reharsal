import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode,setMode] = useState("light")
  //const[textE,setTextE]=useState("Enable Dark Mode")
  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
   setAlert({
    msg:message,
    type:type
   })
   setTimeout(()=>{
    setAlert(null);
   },1500)
  }

   const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor ="#222e4f";
      showAlert("Dark mode has been enabled","success");
      document.title = "Textutils-light mode"
    }else{
      setMode("light")
      document.body.style.backgroundColor ="white";
      showAlert("light mode has been enabled","success");
      document.title = "Textutils-dark mode"
    }
   }
  return (
    <>
  <BrowserRouter>
  <Navbar title="React Reharsal" aboutText = "About Us" mode={mode} toggleMode={toggleMode}  />
  <Alert alert= {alert}/>
  <div className='container'>
  <Routes>
    <Route path="/about" element={<About />}/>
  </Routes>
  <Routes>
    <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to analyze" mode={mode}/>}/>
  </Routes>                                                                             
</div>
  </BrowserRouter>
    </>
  );
}

export default App;
