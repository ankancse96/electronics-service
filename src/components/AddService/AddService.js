import React,{ useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
const AddService = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState();
    const onSubmit = data => {
        const serviceData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        }
        console.log(data)

        const url = `https://still-eyrie-99544.herokuapp.com/addService` ;
        fetch(url,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
         })
         .then(res=> console.log('server side response',res))
   }

    
    
    const handaleAddService = service => {
        console.log(service.target.files)
        const imageData = new FormData ();
        imageData.set('key','338ed84a983c3777dcf493f1ec99b179');
        imageData.append('image',service.target.files[0]);

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
             <h1>Add your Services</h1>
             <form onSubmit={handleSubmit(onSubmit)}>
      
             Product Name: <input name="name" defaultValue="Add Service" ref={register} />
            <br/> <br/>
      
      
            Price: <input type="value" name="price" ref={register} />
         <br/> <br/>
     
         Upload Image: <input name="exampleRequired" type="file" onChange={handaleAddService} />
        <br/> <br/>
      
      <input type="submit" />
    </form>
        </div> */

        <div>
          <Row>
               <Col>
                  <Sidebar></Sidebar>
               </Col>
               <Col >
               <h1>Add your Services</h1>
             <form onSubmit={handleSubmit(onSubmit)}>
      
             Product Name: <input name="name" defaultValue="Add Service" ref={register} />
            <br/> <br/>
      
      
            Price: <input type="value" name="price" ref={register} />
         <br/> <br/>
     
         Upload Image: <input name="exampleRequired" type="file" onChange={handaleAddService} />
        <br/> <br/>
      
      <input type="submit" />
    </form>
               </Col>
  </Row>
        </div>
    );
};

export default AddService;