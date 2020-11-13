import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {NavLink} from 'react-router-dom';
class Locations extends React.Component {
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
        <Col><div className='model loc'>
      
<hr/>
<h3>LOCATIONS &nbsp; &nbsp; &nbsp; &nbsp;
<i class="fa fa-angle-down"

 onClick={()=>{

    this.setState({show:!this.state.show})
    }}>
    </i></h3>
    {
        this.state.show ? 
   [
      <p> <NavLink  exact activeClassName="active_class" to="/">
   Pakistan
   </NavLink>
   </p>,
   <p>
   <NavLink  exact activeClassName="active_class" to="/">
  Islamabad
   </NavLink>
   </p>
   ,
   <p>
   <NavLink  exact activeClassName="active_class" to="/">
  Lahore
   </NavLink>
   </p>
   ,
   <p>
   <NavLink  exact activeClassName="active_class" to="/">
  Karachi
   </NavLink>
   </p>
] : <p>car</p>
    }
        </div></Col>
        
        </Row>
        </Container>
        </div>
        
    );
}
}



    export default Locations;