import React from "react";
import Intro from "../hero/Intro";
import Category from "../category/Category";
import History from "../history/History";
import Popular_product from "../popular_product/Popular_product";
import CoffeMachine from "../coffe_machine/Coffe_machine";
const Main = () => {
  return (
    <div className="main">
      <Intro />
      <Category />
      <History />
      <Popular_product />
      <CoffeMachine />
    </div>
  );
};

export default Main;
