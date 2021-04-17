import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
const AddRating = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState();

    
    const onSubmit = data => {

        const serviceData = {
                comment: data.comment,
                name: data.name,
                city: data.city,
                imageURL: imageURL
                
            }
            const url = `https://still-eyrie-99544.herokuapp.com/addRating` ;
            fetch(url,{
               method:'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify(serviceData)
            })
            .then(res=> console.log('server side response',res))
      }

      const handaleAddImage = product => {
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
      /*  <div>
            <h1>Add your Ratings</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            Comment: <textarea  name="comment" ref={register} />
          
            <br/> <br/>
         Name: <input type="value" name="name" ref={register} />
         <br/> <br/>
        City: <input name="city" type="value" ref={register} />
        <br/> <br/>
        Upload Image: <input name="exampleRequired" type="file" onChange={handaleAddImage} />
        <br/> <br/>

         <input type="submit" />
    </form>
        </div>
        */
       <div>
         <Row>
           <Col>
              <Sidebar></Sidebar>
           </Col>
           <Col>
           <h1>Add your Ratings</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            Comment: <textarea  name="comment" ref={register} />
          
            <br/> <br/>
         Name: <input type="value" name="name" ref={register} />
         <br/> <br/>
        City: <input name="city" type="value" ref={register} />
        <br/> <br/>
        Upload Image: <input name="exampleRequired" type="file" onChange={handaleAddImage} />
        <br/> <br/>

         <input type="submit" />
    </form>
           </Col>
         </Row>
       </div>
    );
};

export default AddRating;