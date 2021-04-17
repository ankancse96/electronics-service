
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AddEngineer from '../AddEngineer/AddEngineer';
const AddEngineers = () => {
    const [engineers, setEngineers] = useState([])
    useEffect( () => {
        fetch('https://still-eyrie-99544.herokuapp.com/engineers')
        .then(res => res.json())
        .then(data => setEngineers(data))
    }, [])
    return (
        <section>
        <h3 className="text-center   mb-5">Our Engineer</h3>
                <Container>
                <Row>
                    {
                     engineers.map(engineer =><AddEngineer key={engineer._id} engineer={engineer} />)
                    }
                    
                </Row>
                </Container>
                </section>
    );
};

export default AddEngineers;