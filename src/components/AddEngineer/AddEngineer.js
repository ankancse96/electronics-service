import React from 'react';
import { Card, Col } from 'react-bootstrap';

const AddEngineer = ({engineer}) => {
    return (
        <Col md={4} xl={4} l={4}>
            
    
    <Card style={{ width: '16rem', height: '22rem',margin:"5px",marginLeft:"10px",textAlign:"center"}}>
    <Card.Img style={{height:"12rem"}} variant="top" src={engineer.imageURL} />
    <Card.Body>
    <Card.Title><h6>{engineer.name}</h6></Card.Title>
  </Card.Body>

    </Card>
   
            </Col>
    );
};

export default AddEngineer;