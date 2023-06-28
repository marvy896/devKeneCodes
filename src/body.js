import React from "react";
import TechPortfolio from "./flipImg";
import Footer from "./footer";

export default function Body() {
  return (
    <div className="mainheader">
      <div className="header">
        <div className="Nav">
          <div className="innerNav">
            <div className="innerDiv">
              Coded Elements From buttons, to inputs, navbars, alerts or cards,
              you are covered
            </div>
            <div className="innerDiv">
              Coded Elements From buttons, to inputs, navbars, alerts or cards,
              you are covered
            </div>
            <div className="innerDiv">
              Coded Elements From buttons, to inputs, navbars, alerts or cards,
              you are covered
            </div>
          </div>
        </div>
      </div>
      <TechPortfolio />
      <Footer />
    </div>
  );
}
