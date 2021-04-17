import React ,{  useEffect, useState }  from 'react';
import {  Table } from 'react-bootstrap';

const TotalOrder = () => {
    const [totalOrders, setTotalOrders] = useState([]);

    useEffect(() => {
        fetch('https://still-eyrie-99544.herokuapp.com/totalOrders')
        .then(res => res.json())
        .then(data => setTotalOrders(data))
    }, [])
    return (
        <div>
        Total Order: {totalOrders.length}

        {
            totalOrders.map(book =>
                
                <Table striped bordered hover variant="dark" key={book._id}> <thead> <tr>
                    
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Order Date</th>
                    <th>Email</th>
                    </tr> </thead> 
                    
                    <tbody>
                    <td> {book.name} </td>
                    <td> {book.price} </td>
                    <td> {(new Date(book.orderDate).toDateString('dd/MM/yyyy'))} </td>
                    <td> {book.email} </td>

                    </tbody>
                     </Table>)
        }




    </div> 
    
    );
};

export default TotalOrder;