import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

class Register extends React.Component {
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
        <Col><div>
      
<hr/>
<h3>Register &nbsp; &nbsp; &nbsp; &nbsp;
<i class="fa fa-angle-down"

 onClick={()=>{

    this.setState({show:!this.state.show})
    }}>
    </i></h3>
    {
        this.state.show ? 
   [
    
    <input type='checkbox' ></input>,<span>Lahore</span>
    ,
    
    <input type='checkbox' ></input> ,<span>Lahore</span>
    ,
    <button>click</button>
] : null
    }
        </div></Col>
        
        </Row>
        </Container>
        </div>
        
    );
}
}
export default Register;