import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import Chatbot from './components/Chatbot'


const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Chatbot }  path="/Chatbot" />
       </BrowserRouter>
   )
}

export default Routes;