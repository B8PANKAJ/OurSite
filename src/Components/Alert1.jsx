import React from "react";
import { Link } from "react-router-dom";

const Alert1 = () => {
  return (
    <Link to="/contact">
      <div className="w-full max-h-fit bg-black text-white text-center flex justify-center items-center flex-wrap animate-fade-down animate-normal">
        <p className="font-medium">
          Click here to connect with our experts to get help navigate your
          business requirements.
        </p>
      </div>
    </Link>
  );
};

export default Alert1;
