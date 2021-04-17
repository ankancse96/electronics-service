
import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import { Container, Row } from 'react-bootstrap';


const Service = () => {

    const [services, setServices] = useState([]);
    
    
    useEffect(() => {
        fetch('https://still-eyrie-99544.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
           
        })
    }, [])
    return (
        <section className="services-container mt-5">
            
                
                <h2 className="mb-5" style={{textAlign:"center"}}>OUR SERVICES</h2>
            <Container>
            <Row>
            
                {
                    services.map(service => <ServiceDetails service={service} key={service.name}></ServiceDetails>)
                }
            
          </Row>
          </Container>
        </section>
    );
};

export default Service;