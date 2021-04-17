import React,{ useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const ManageProduct = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://still-eyrie-99544.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [services])

    const deleteProduct = (id) => {
        console.log('click',id);
        fetch(`https://still-eyrie-99544.herokuapp.com/delete/${id}`,{
            method : 'DELETE'
        })
        .then(res => res.json())
            .then (result => {
                'delete successfully'
            })
      };
    return (
        <div>
            <h3 style={{textAlign: 'center'}}>Manage Products : {services.length}</h3>
            {
            services.map(service=>
            <Table striped bordered hover variant="dark"> 
            <thead>
                <tr>
                
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th></th>
              </tr></thead>
              
              <tbody>
              <td>{service.name} </td>
              <td>1</td>
              <td>{service.price}</td>
              <td><Button onClick={()=>deleteProduct(service._id)}>Delete</Button>
              </td>
              </tbody>
              
            </Table>)
            }
           
        </div>
    );
};

export default ManageProduct;