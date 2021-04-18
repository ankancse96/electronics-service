import React from 'react';

const Testimonial = (props) => {
    const {comment,name,city ,imageURL} = props.testimonial;
    return (
        <div className="card shadow-sm col-lg-6">
            <div className="card-body">
                <p className="card-text text-center">{comment}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={imageURL} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{city}</p>
                </div>
            </div>
       </div>
    );
};

export default Testimonial;