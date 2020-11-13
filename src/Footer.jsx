import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link,NavLink} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import React from 'react';
const Footer=()=>{

    return(
        <>
        <div className="footer-one">
        <Container fluid >
        <Row>
        <Col>
        <img alt="timer" src={require('./imag/phone-app.png')} />
        </Col>
        <Col>
        <div className="trd-footer">
        <h1>TRY THE OLX APP</h1>
        <h6>Buy, sell and find just about anything using the ah6p on your mobile.
       
        </h6>
        </div>
        </Col>
        <Col>
        <div className="img-footer">
        <h6> GET YOUR APP TODAY</h6>
        <img alt="timer" src={require('./imag/playstore_2x.png')} />
        
        <img alt="timer" src={require('./imag/appstore_2x.png')} />
        </div>
        </Col>
        </Row>
        </Container>
        </div>
        <div className="two-footer">
        <Container>
        <Row>
        <Col>
        <h6>POPULAR CATEGORIES</h6>
        <ul>
        <li>
        <Link  to="/Cars">Cars</Link>
        </li>
        <li>
        <NavLink  exact activeClassName="active_class" to="/Motorcycle">Flats</NavLink>
       
        </li>
        <li>
        <NavLink  exact activeClassName="active_class" to="/Motorcycle">Jobs</NavLink>
       
        </li>
        <li>
        <NavLink  exact activeClassName="active_class" to="/Mobile">Mobile phones</NavLink>
       
        </li>
        </ul>
        
        
         </Col>

        <Col>
        <h6>TRENDING SEARCHES</h6>
        <ul>
        <li>
        <Link  to="/Mobile">Bikes</Link>
        </li>
        <li>
        <NavLink  exact activeClassName="active_class" to="/Motorcycle">Books</NavLink>
       
        </li>
        <li>
        <NavLink  exact activeClassName="active_class" to="/Motorcycle">Watches</NavLink>
       
        </li>
        <li>
        <NavLink  exact activeClassName="active_class" to="/Motorcycle">Dogs</NavLink>
       
        </li>
        </ul>
        
        </Col>

        <Col>
        <h6>ABOUT US</h6>
        <ul>
        <li>
        <Link  to="/Mobile">About OLX Group</Link>
        </li>
        <li>
        <NavLink  exact activeClassName="active_class" to="/Motorcycle">OLX Blog</NavLink>
       
        </li>
        <li>
        <NavLink  exact activeClassName="active_class" to="/Motorcycle">Contact Us
   </NavLink>
       
        </li>
        <li>
        <NavLink  exact activeClassName="active_class" to="/Motorcycle">     OLX for Businesses</NavLink>
       
        </li>
        </ul>
        
        </Col>

        <Col>
        <h6>OLX</h6>
        <ul>
        <li>
        <Link  to="/Mobile">Help
        </Link>
        </li>
        <li>
        <NavLink  exact activeClassName="active_class" to="/Motorcycle">Sitemap
      </NavLink>
       
        </li>
        <li>
        <NavLink  exact activeClassName="active_class" to="/Motorcycle">  Legal & Privacy</NavLink>
       
        </li>
       
        </ul>
        
        </Col>

        <Col>
        <h6>FOLLOW US</h6>
        <div className='in'>
        <i class="fa fa-facebook"></i>
        <i class="fa fa-twitter"></i>
        <i class="fa fa-youtube"></i>
        </div>
        </Col>


        </Row>
        </Container>
        </div>
        <div className="third-footer">
        <Container>
        <Row>
        <Col>
        <p>Other Countries India - South Africa - Indonesia</p>
        </Col>
        <Col>
        <p>
        Free Classifieds in Pakistan. © 2006-2020 OLX</p>
        </Col>
        </Row>
        </Container>
        </div>
        </>


    );
}
export default Footer;