import React from 'react';
import Button from '../Shared/Button';
import doctorsmall from '../../assets/images/doctor-small.png'
import bgAppointment from '../../assets/images/appointment.png'

const AppointmentBanner = () => {
    return (
        <div className="hero my-28 px-16" style={{backgroundImage: `url(${bgAppointment})`}}>
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={doctorsmall}
          className="max-w-sm rounded-lg mr-16 mt-[-80px] hidden lg:block"
        />
        <div>
            <h3 className='text-primary text-sm font-bold'>Appointment</h3>
          <h1 className="text-3xl font-bold text-white">Make an appointment Today</h1>
          <p className="py-6 text-white">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
    );
};

export default AppointmentBanner;