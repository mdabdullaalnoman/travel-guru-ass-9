import React, { createContext, useState } from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import CoxBazar from './Components/CoxBazar/CoxBazar';
import SreMangal from './Components/SreMangal/SreMangal';
import Sundarban from './Components/Sundorban/Sundarban';
import BookDetail from './Components/BookDetail/BookDetail';
import LogIn from './Components/LogIn/LogIn';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Logi from './Components/Logi/Logi';

export const UserContext =createContext();

function App() {
  const [loggedInUser , setLoggedInUser] = useState({
    isSignIn:false,
    name:'',
    email:'',
  
  });
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>


   
   <Router>
     <Switch>
       <Route path="/home">
         <Home></Home>
       </Route>

       <Route path="/cox">
         <CoxBazar></CoxBazar>
       </Route>

       <Route path="/sre">
         <SreMangal></SreMangal>
       </Route>

       <Route path="/sun">
         <Sundarban></Sundarban>
       </Route>

       
       <PrivateRoute path="/bookDetail">
         <BookDetail></BookDetail>
       </PrivateRoute>

       <Route path="/login">
         <LogIn></LogIn>
       </Route>

       <Route path="/logi">
         <Logi></Logi>
       </Route>

       <Route exact path="/">
         <Home></Home>
       </Route>

       <Route path="*">
          <NoMatch></NoMatch>
       </Route>
     </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
