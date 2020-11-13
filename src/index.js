import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import Sdata from "./Sdata";
import Cards from "./Cards";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './services/reducer/index'
export const AuthContext = React.createContext(null);
const store=createStore(rootReducer)
console.warn(store)
 ReactDOM.render(
  <BrowserRouter>
   <Provider store={store}>
  
   <App />
   </Provider>

    
   </BrowserRouter>
   ,
  document.getElementById('root')
);
