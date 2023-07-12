import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner2 from './AppointmentBanner2';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner2 date={date} setDate={setDate}></AppointmentBanner2>
            <AvailableAppointments date={date}></AvailableAppointments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;