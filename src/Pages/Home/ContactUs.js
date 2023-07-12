import React from "react";
import bg from "../../assets/images/appointment.png";
import Button from "../Shared/Button";

const ContactUs = () => {
  return (
    <div className="hero my-28" style={{ backgroundImage: `url(${bg})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content text-center">
        <div className="p-10">
          <h3 className="font-bold text-secondary">Contact Us</h3>
          <h1 className="mb-10 text-3xl text-white">Stay connected with us</h1>
          <form>
            <input
              type="email"
              placeholder="Email Address"
              className="input w-full max-w-xs mb-3"
            />

            <input
              type="text"
              placeholder="Subject"
              className="input w-full max-w-xs mb-3"
            />

            <input
              type="text"
              placeholder="Your message"
              className="input input-bordered input-lg w-full max-w-xs h-28 mb-8"
            />

            <br />
            <Button>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
