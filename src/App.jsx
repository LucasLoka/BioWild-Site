import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Home from "./components/Home/Home";
import Chatbot from './components/Chatbot/Chatbot';

function App() {


   return(
        <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/chatbot' element={<Chatbot/>}/>
        </Routes>
    </Router>
   )

}


export default App

