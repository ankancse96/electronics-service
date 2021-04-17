import React from 'react';
import AddEngineers from '../../AddEngineers/AddEngineers';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <Testimonials></Testimonials>
            <AddEngineers></AddEngineers>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;