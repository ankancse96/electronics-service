import React,{useState,useEffect, useContext} from 'react';
import { Card , Button, Row, Col } from 'react-bootstrap';
import {useParams} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  
  KeyboardDatePicker,
 
} from '@material-ui/pickers';

import { Container } from '@material-ui/core';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';
import { UserContext } from '../../../App';
const CheckOut = () => {
    const {name} = useParams();

    const [services, setServices] = useState({});
    useEffect(() => {
        fetch('https://still-eyrie-99544.herokuapp.com/services/' + name)
        .then(res => res.json())
        .then(data => setServices(data))
    }, [name])
    console.log(services)
   /* const service = fakeData.filter(serviceData=>serviceData.name === name);
    console.log(fakeData);
    console.log(service);
    const{price,img} = service[0];
        console.log('this is',name,price,img) */

        const [loggedInUser, setLoggedInUser] = useContext(UserContext);
        console.log(setLoggedInUser);
        const [selectedDate, setSelectedDate] = useState({orderDate: new Date()});
        const handleDateChange = (date) => {
            const newDates = {...selectedDate}
            newDates.orderDate = (date)
            setSelectedDate(newDates);
          };

          const  handleCheckOut = () => {
            
            const newOrders = {...loggedInUser, ...selectedDate,...services};
            console.log(newOrders)

            fetch('https://still-eyrie-99544.herokuapp.com/addOrder', {
            
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newOrders)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
          }
    return (
        <div style={{textAlign:"center"}}>
        <Card style={{width:"30rem",marginLeft:"100px"}}>
        <Card.Body >
        <div style={{display:"flex"}}>
        <img style={{height:"5rem"}} src={services.imageURL} alt=""/>
        <div style={{padding:"15px"}}><h4> Product Name </h4>  {name}</div>
        <div style={{padding:"15px"}}><h4>Duration </h4>  5 days</div>
        <div style={{padding:"15px"}}><h4>Total Cost </h4> {services.price}$</div>
        
        </div>
        </Card.Body>
        
      </Card>
            <Container>
            <Row>
                 <Col>
                 <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker disableToolbar variant="inline"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Order Date"
                                    value={selectedDate.orderDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    />
                                    
                                    
                                </Grid>
                                </MuiPickersUtilsProvider>
                 </Col>
                 <Col>
                 <h6>Complete your Payment</h6>
                 <ProcessPayment></ProcessPayment>
                 </Col>
            </Row>
            </Container>
            <Button onClick={ handleCheckOut}   >Check Out</Button>
            </div>
    );
};

export default CheckOut;