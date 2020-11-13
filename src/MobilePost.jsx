// import React from 'react';

// import {NavLink} from 'react-router-dom';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// const Post=()=>{
//     return(
// <>
// <Container>
// <Row>
// <Col>
// <h4>POST YOUR AD</h4>
// </Col>

// </Row>
// </Container>
// <Container className='post'>
// <Row>
// <Col>
// <h3>CHOOSE A CATEGORY</h3>
// <input type='text' hidden id='ii'></input>
// <ul>
// <li> <i class='fa fa-phone'></i> <span>Mobile</span> <i class="fa fa-angle-down" onClick={()=>{
// document.getElementById('iii');
    
//     }}></i></li>
// </ul>
// </Col>

// </Row>
// </Container>
// </>


//     );
// }
// export default Post;
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class MobilePost extends React.Component {
    constructor(props) {
      super(props);
this.state={
    show:false
}
    }

render(){
    return(
        <div>
        <Container>
        <Row>
        <Col><div>
      
<hr/>
<h3>Mobile &nbsp; &nbsp; &nbsp; &nbsp;
<i class="fa fa-angle-right"

 onClick={()=>{

    this.setState({show:!this.state.show})
    }}>
    </i></h3>
    {
        this.state.show ? 
   [
       <div className='mobill' style={{position:'absolute', left:'15%',border:'2px solid red'}} >
       
       <p>Tablets</p>
       <p>Tablets</p>
       <p>Tablets</p>
       </div>
] : null
    }
        </div></Col>
        
        </Row>
        </Container>
        </div>
        
    );
}
}
export default MobilePost;