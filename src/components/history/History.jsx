import React from "react";
import "./History.scss";
import categoryImage1 from "../../assets/Rectangle1.png";
import categoryImage2 from "../../assets/Rectangle2.png";
import categoryImage5 from "../../assets/Rectangle5.png";
const History = () => {
  return (
    <div className="history__wrapper">
      <div className="container">
        <div className="history">
          <div className="history__items">
            <img src={categoryImage2} alt="" />
            <img src={categoryImage1} alt="" />
          </div>
          <div className="history__items second">
            <img src={categoryImage5} alt="" />
          </div>
          <div className="history__items">
            <p className="strong">
              <strong>Our History</strong>
            </p>
            <h3>Create a new story with us</h3>
            <p>
              mauris rhoncus in imperdiet placerat. vestibu emismd nisl
              suscirpit ligula volutpat, a feyguat urn maxmaus. cars massa
              nibhtincidunt. donec et nibh maximus, est eu, mattis nuce.
              preasent ut quam quis quam venen atis fringilla. morbi vastibulum
              id tells mmodo mattis. aliauam erat volutpal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
