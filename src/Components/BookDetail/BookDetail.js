import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import one from '../../Image/Image/Rectangle 26.png';
import two from '../../Image/Image/Rectangle 27.png';
import three from '../../Image/Image/Rectangle 28.png';


const BookDetail = () => {
    return (
       <div>
           <div>
           <Container>
            <Row style={{marginBottom:"10px"}}>
                
                <Col sm={3}><img style={{height:"135px" , width:"185px",padding:"10px" ,borderRight:"5px"}} src={one} alt=""/></Col>

                <Col sm={6}>
                    <h6 style={{paddingLeft:"10px",paddingTop:"20px",color:"maroon"}}>Light Bright ari stylish apt and save peachfull stay.</h6>
                    <p style={{fontSize:"10px", paddingLeft:"10px"}}>4 guest 2 bedrooms 2 bed 2 bats</p>
                    <h6 style={{paddingLeft:"10px"}}>Rate $122</h6>
                    </Col>
            </Row>
        </Container>     
           </div>

           <div>
           <Container>
            <Row style={{marginBottom:"10px"}}>
                
                <Col sm={3}><img style={{height:"135px" , width:"185px",padding:"10px" ,borderRight:"5px"}} src={two} alt=""/></Col>

                <Col sm={6}>
                    <h6 style={{paddingLeft:"10px",paddingTop:"20px",color:"maroon"}}>Light Bright ari stylish apt and save peachfull stay.</h6>
                    <p style={{fontSize:"10px", paddingLeft:"10px"}}>4 guest 2 bedrooms 2 bed 2 bats</p>
                    <h6 style={{paddingLeft:"10px"}}>Rate $182</h6>
                    </Col>
            </Row>
        </Container>     
           </div>
           <div>
           <Container>
            <Row style={{marginBottom:"10px"}}>
                
                <Col sm={3}><img style={{height:"135px" , width:"185px",padding:"10px" ,borderRight:"5px"}} src={three} alt=""/></Col>

                <Col sm={6}>
                    <h6 style={{paddingLeft:"10px",paddingTop:"20px",color:"maroon"}}>Light Bright ari stylish apt and save peachfull stay.</h6>
                    <p style={{fontSize:"10px", paddingLeft:"10px"}}>4 guest 2 bedrooms 2 bed 2 bats</p>
                    <h6 style={{paddingLeft:"10px"}}>Rate $12</h6>
                    </Col>
            </Row>
        </Container>     
           </div>
       </div>      
                    
         
    );
};

export default BookDetail;