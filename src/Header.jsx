import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

import {NavLink} from 'react-router-dom';
import Popper from 'popper.js';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import React from 'react';


const Header =()=>{
return(
    <>
    <Container fluid>
    <Row >
            <Col className="head">
            <img  className='logo' alt="timer" src={require('./imag/logo.png')} />
           
            <div className="location">
            <select  name="cars" id="cars">
  <optgroup >
    <option >Karachi</option>
    <option >Islamabad</option>
  </optgroup>
  <optgroup >
    <option >Lahore</option>
    <option >Pishawar</option>
  </optgroup>
</select></div>
           
              <input type="Option" placeholder="Find Cars,Mobile Phones and more....">
               

          
              </input>  <i class="fa fa-search search"></i>
           
              
            <NavLink className="sell" exact activeClassName="active_class" to="/Post">
            <i class="fa fa-plus"></i>   Login
            </NavLink> 
                              </Col>

        </Row>
    </Container>
  
    

    </>
);

}
export default Header;