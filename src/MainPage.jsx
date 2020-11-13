import React from "react";
import HeaderContainer from './containers/HeaderContainer.js';

import HomeContainer from './containers/HomeContainer'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Cards from './Cards';
import Sdata from './Sdata';
function ncard (val){
    console.log(val)
    return(
        <div>
       
    <HomeContainer 
    img={val.img}
   price={val.price} 
    year={val.year}
    title={  val.title}/>

   </div>
    );
}
const MainPage =()=>{
    
return(
<>
<Container fluid >
<Row style={{display:"block"}}>
<Col>

<img alt="timer" src={require('./imag/hero_bg_pk.jpg')} style={{width:"100%",height:"250px"}} />


</Col>

<Col style={{marginTop:"40px"}}>

<img alt="timer" src={require('./imag/content.jpg')} />

</Col>
</Row>
</Container>
<Container fluid className="veiw_more">
<Row>
<Col>
<h4>More on Cars</h4>
</Col>
<Col>
<a href="#">View More</a>
</Col>
<div>

<Col>

{Sdata.filter(Sdata => Sdata.price == 2).map(ncard) }
</Col>
</div>

</Row>
</Container>


 
</>
);

}
export default MainPage;