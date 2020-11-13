import React from "react";
import { Simulate } from "react-dom/test-utils";
import Sdata from './Sdata'
import ListGroup from 'react-bootstrap/ListGroup'

import ListGroupItem from 'react-bootstrap/ListGroupItem'

import Card from 'react-bootstrap/Card'
import './index.css';


function Cards(props){
    // console.log(props);
 return(   
     <>
   <div className="Card">
    <Card style={{ width: '16rem' }} >
  <Card.Body>
    <Card.Title>{props.title}
    <img   alt="timer" src={require('./imag/appstore_2x.png')} />
    </Card.Title>
    
    <i id='heart' class='fa fa-heart'></i>
  </Card.Body>
  <ListGroup className="list-group-flush t">
    <ListGroupItem><h4>{props.year}</h4> <br/>
    <h6> {props.price}</h6>
    <button  onClick={
    ()=>{props.addToCartHandler({Title:props.title,Year:props.year})}
      }>Click me
    </button>
    </ListGroupItem>
  </ListGroup>
</Card></div>
    </>
    );
}
export default Cards;