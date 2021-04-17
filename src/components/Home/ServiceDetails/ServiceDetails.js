import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
const ServiceDetails = (props) => {
  const{name,imageURL,price} = props.service;
  const history = useHistory()
  const  handleBuy = (name) => {
      history.push(`/checkOut/${name}`);
  }
    return (
        <Col md={4} xl={4} l={4}>
            
    
    <Card style={{ width: '16rem', height: '22rem',margin:"5px",marginLeft:"10px",textAlign:"center"}}>
    <Card.Img style={{height:"12rem"}} variant="top" src={imageURL} />
    <Card.Body>
    <Card.Title><h6>{name}</h6></Card.Title>
    <Card.Text>  <p>Price: {price}</p></Card.Text>
    
    <Button  onClick={() => handleBuy(name)}  variant="primary"> Select  </Button>
    
  </Card.Body>

    </Card>
   
            </Col>
    );
};

export default ServiceDetails;