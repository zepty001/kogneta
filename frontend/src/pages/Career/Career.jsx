import React from "react";
import "./Career.scss";
import { vacancy } from "../../assets";

const Career = () => {
  return (
    <div>
      <div className="career">
        <div className="career-cntr">
          <div className="career-heading">Careers</div>
          <div className="career-text">
            Sorry! at the moment we are not looking for any talented individual.
            Thank you for considering us as your career option.
          </div>
            <img src={vacancy} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Career;
