import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {NavLink} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown'

import Nav from 'react-bootstrap/Nav'
import './index.css';
import MainPage from "./MainPage";
import React from 'react';
const Navv =()=>{
return(
<>
<div ClassName="aa">
<Container fluid>
    <Row md={2}>
        <Col xl={2}>
        
      <NavDropdown title="Pakistan" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>

        </Col>
   <Col xl={10} >
   <NavLink  exact activeClassName="active_class" to="/Mobile">
   Mobile Phones
   </NavLink>
   <NavLink  exact activeClassName="active_class" to="/Car">
   Cars
   </NavLink>
   <NavLink  exact activeClassName="active_class" to="/Motorcycle">
   Motorcycles
   </NavLink>
   <NavLink  exact activeClassName="active_class" to="/House">
   Houses
   </NavLink>
   <NavLink  exact activeClassName="active_class" to="/Tv">
   TV - Video - Audio
   </NavLink>
   <NavLink  exact activeClassName="active_class" to="/Tablet">
   Tablets
   </NavLink>
   <NavLink  exact activeClassName="active_class" to="/Land">
   Land & Plots
   </NavLink>
   <NavLink  exact activeClassName="active_class" to="/">
   
   </NavLink>
   </Col>



</Row>
</Container>
</div>
</>

);

}
export default Navv;