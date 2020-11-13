import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {NavLink} from 'react-router-dom';
class Filters extends React.Component {
    constructor(props) {
      super(props);
this.state={
    show:true
}
    }

render(){
    return(
        <div>
        <Container>
        <Row>
        <Col>
        <div className='categories'>
        <h5>Filters</h5>
<hr/>
<h3>CATEGORIES &nbsp; &nbsp; &nbsp; &nbsp;
<i class="fa fa-angle-down"

 onClick={()=>{

    this.setState({show:!this.state.show})
    }}>
    </i></h3>
    {
        this.state.show ? 
   [
      <li> <NavLink  exact activeClassName="active_class" to="/">
   All Categories
   </NavLink>
   </li>,
   <p>
   <NavLink  exact activeClassName="active_class" to="/">
   Cars on Installments (10670)
   </NavLink>
   </p>,
   <p>
   <NavLink  exact activeClassName="active_class" to="/">
   Cars Accessories (11376)
   </NavLink>
   </p>,
   <p>
   <NavLink  exact activeClassName="active_class" to="/">
   Spare Parts (9090)
   </NavLink>
   </p>,
   <p>
   <NavLink  exact activeClassName="active_class" to="/">
   Buses, Vans & Trucks (5285)
   </NavLink>
   </p>,
   <p>
   <NavLink  exact activeClassName="active_class" to="/">
   Boats (354)
   </NavLink>
   </p>,
   <p>
   <NavLink  exact activeClassName="active_class" to="/">
   Other Vehicles (8080)
   </NavLink>
   </p>,
   
] : <p>car</p>
    }
        </div></Col>
        
        </Row>
        </Container>
        </div>
        
    );
}
}
    export default Filters;
    //YEAR
    // CONDITION
    // TRANSMISSION
    // REGISTERED
    // DOWN PAYMENT (RS)
    // MONTHLY INSTALLMENT (RS)
    // INSTALLMENT PLAN
    // FINANCER TYPE
    // TRANSACTION TYPE