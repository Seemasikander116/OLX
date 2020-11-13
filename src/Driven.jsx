import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {NavLink} from 'react-router-dom';
class Driven extends React.Component {
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
        <Col><div className='price'>
      
<hr/>
<h3>KMC DRIVEN &nbsp; &nbsp; &nbsp; &nbsp;
<i class="fa fa-angle-down"

 onClick={()=>{

    this.setState({show:!this.state.show})
    }}>
    </i></h3>
    {
        this.state.show ? 
   [
    <input type='text' placeholder='Min'></input>  
    
    ,
    <input type='text' placeholder='Max'></input> 
    ,
    <i class="fa fa-angle-right vh"></i>
] : null
    }
        </div></Col>
        
        </Row>
        </Container>
        </div>
        
    );
}
}
export default Driven;