import React from 'react';
import { Button, Image } from 'react-bootstrap';
import banner from '../../../images/e2.jpg'
const HeaderMain = () => {
    return (
        <main style={{height:"600px"}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h3>Welcome Your Services <br/> Start Here </h3>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste id iusto delectus eligendi amet? Consequatur aut vero tenetur animi quo dignissimos dolor minus nemo, alias labore! Modi in natus cupiditate!</p>
                <Button>Sign Up</Button>
            </div>
            <div className="col-md-6">
            <Image src= {banner} fluid rounded />
            </div>
        </main>
    );
};

export default HeaderMain;