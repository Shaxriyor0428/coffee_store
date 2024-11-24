import "./Intro.scss";
import React from "react";

const Intro = () => {
  return (
    <div className="intro__wrapper">
      <div className="container">
        <div className="intro">
          <h2>Enjoy Your Morning Coffe.</h2>
          <p>
            The coofee is brewed by fist roasting the green coffee beans over
            hot coals in brazier. given to Opportunity
          </p>
          <button>Test Coffee</button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
