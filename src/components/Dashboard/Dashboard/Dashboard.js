import React from 'react';
import {  Image } from 'react-bootstrap';
import banner from '../../../images/e2.jpg'
import Sidebar from '../../Sidebar/Sidebar';
const Dashboard = () => {
    return (
      /*  <main  className="row d-flex align-items-center"> */
      <main  className="row">
            <div className="col-md-6 ">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-6">
            <Image src= {banner} fluid rounded />
            </div>
        </main>
    );
};

export default Dashboard;