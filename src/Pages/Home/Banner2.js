import React from "react";
import Button from "../Shared/Button";
import treatment from '../../assets/images/treatment.png'

const Banner2 = () => {
  return (
    <div className="hero min-h-screen lg:px-28">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          className="max-w-sm rounded-lg shadow-2xl mr-16"
        />
        <div>
          <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button>See More</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
