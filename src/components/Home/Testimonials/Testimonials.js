import React, { useEffect, useState } from 'react';

import Testimonial from '../Testimonial/Testimonial';


const Testimonials = () => {
    const [ratings, setRatings] = useState([]);
    useEffect(() => {
        fetch('https://still-eyrie-99544.herokuapp.com/ratings')
        .then(res => res.json())
        .then(data => {
            setRatings(data)
            
        })
    }, [])
    return (
        <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h3 className=" text-center text-uppercase">Testimonial</h3>
                   <h5>What Our Customers  Says </h5>
               </div>
               <div className="card-deck mt-5">
                    {
                        ratings.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;