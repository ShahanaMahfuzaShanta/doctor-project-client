import React from 'react';
import footerbg from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{backgroundImage: `url(${footerbg})`, backgroundSize:'cover'}}>
  <div className="footer p-10">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Oral Health</span> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Our Address</span> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
  </div>
  <div className='pt-20 p-10'>
    <p className='text-center'>Copyright © 2022 - All right reserved</p>
  </div>
</footer>
    );
};

export default Footer;