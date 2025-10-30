import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home/Home";
import About from './Pages/About/About';
import Services from './Pages/Services/Services'
import Contact from './Pages/Contact/Contact';
import "./App.css";

function App() {

  return (
    <>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
