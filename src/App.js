import React from 'react';
import './App.css';
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Navs from './Components/Navs';
import Home from "./Pages/Home"
import Starred from './Pages/Starred';

function App() {
  return (
     <>
    
     <BrowserRouter>
     <Navs/>
     <Routes>
     <Route path="/"element={<Home/>}/>
     <Route path="/starred"element={<Starred/>}/>

      </Routes>
     </BrowserRouter>
     </>
  
  );
}

export default App;
