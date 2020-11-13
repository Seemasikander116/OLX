import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {NavLink} from 'react-router-dom';
class Model extends React.Component {
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
        <Col><div className='model'>
      
<hr/>
<h3>MAKE AND MODEL &nbsp; &nbsp; &nbsp; &nbsp;
<i class="fa fa-angle-down"

 onClick={()=>{

    this.setState({show:!this.state.show})
    }}>
    </i></h3>
    {
        this.state.show ? 
   [
      <p> <NavLink  exact activeClassName="active_class" to="/">
      Suzuki (22826)
   </NavLink>
   </p>,
   <p>
   <NavLink  exact activeClassName="active_class" to="/">
   Toyota (13757) Honda (7826)
   </NavLink>
   </p>
   ,
   <p>
   <NavLink  exact activeClassName="active_class" to="/">
    Honda (7826)
   </NavLink>
   </p>
   ,
   <p>
   <NavLink  exact activeClassName="active_class" to="/">
   Daihatsu (3425)
   </NavLink>
   </p>
] : null
    }
        </div></Col>
        
        </Row>
        </Container>
        </div>
        
    );
}
}
export default Model;