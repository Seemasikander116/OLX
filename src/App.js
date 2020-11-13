import React from 'react';
import './App.css';
import Header from "./Header";
import Navv from "./Navv";
import Mobile from "./Mobile"
import Tv from "./Tv"
import Car from "./Car"
import House from "./House"
import Land from "./Land"
import Motorcycle from "./Motorcycle"
import Post from "./Post"
import MainPage from "./MainPage.jsx"
import Tablet from "./Tablet"
import {Route,Switch} from "react-router";
import Footer from'./Footer';

function App(props) {
  
    
   
  return (
    <>
     <Header/>
     
     <Navv/>
     <Switch>
     <Route exact path="/" component={MainPage}/> 
<Route exact path="/Mobile" component={Mobile}/>
<Route exact path="/Car" component={Car}/>
<Route exact path="/House" component={House}/>
<Route exact path="/Tv" component={Tv}/>
<Route exact path="/Tablet" component={Tablet}/>
<Route exact path="/Land" component={Land}/>

<Route exact path="/Post" component={Post}/>
<Route exact path="/Motorcycle" component={Motorcycle}/>

</Switch>
<Footer/>

 </>
  );
}

export default App;

