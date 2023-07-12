import React from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import Banner from './Banner';
import Banner2 from './Banner2';
import ContactUs from './ContactUs';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <Banner2></Banner2>
        <AppointmentBanner></AppointmentBanner>
        <Testimonials></Testimonials>
        <ContactUs></ContactUs>
        <Footer></Footer>
        </div>
    );
};

export default Home;