import React from 'react';
import {Button, Container, Row, Col, Card ,ListGroup} from 'react-bootstrap';
import { Link } from "react-router-dom";

const  Sundarban = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={6}>
                        <Card border="success" style={{ width: '18rem' }}>
                            <Card.Header style={{ backgroundColor: "white", color: "green" }}>Sundarban </Card.Header>
                            <Card.Body style={{ backgroundColor: "black", color: "white" }}>

                                <Card.Text>
                                    Sundarban is town on the southest cost of bangladesh.Its long for is very long.South of town the topical placr is very beautiful. i like this place very much. I want to go there . because this place is very beautiful.
                                 </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={6}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header>Orgin</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Dhaka</ListGroup.Item>
                            </ListGroup>   
                            <Card.Header>Destination</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Sundarban</ListGroup.Item>
                            </ListGroup> 
                            <Link to="/bookDetail"><Button variant="success">Start Booking</Button> </Link> 
                          
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Sundarban;