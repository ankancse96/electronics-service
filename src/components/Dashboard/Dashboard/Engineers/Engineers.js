import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../../../Sidebar/Sidebar';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
const Engineers = () => {
    const { register, handleSubmit} = useForm();
    const [imageURL, setImageURL] = useState();

    const onSubmit = data => {

        const productData = {
                name: data.name,
                email: data.email,
                imageURL: imageURL
            }
            const url = `https://still-eyrie-99544.herokuapp.com/addEngineer` ;
            fetch(url,{
               method:'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify(productData)
            })
            .then(res=> console.log('server side response',res))
      }
      const handaleAddEngineer = product => {
        console.log(product.target.files)
        const imageData = new FormData ();
        imageData.set('key','338ed84a983c3777dcf493f1ec99b179');
        imageData.append('image',product.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
            console.log(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div>
            <Row>
                <Col>
                    <Sidebar></Sidebar>
                </Col>
                <Col>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        Name: <input name="name" defaultValue="Add Product" ref={register} />
                        <br /> <br />
                              Email: <input type="email" name="email" ref={register} />
                        <br /> <br />
                            Upload Image: <input name="exampleRequired" type="file" onChange={handaleAddEngineer} />
                        <br /> <br />

                        <input type="submit" />
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default Engineers;