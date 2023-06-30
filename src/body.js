import React from "react";
import TechPortfolio from "./project";
import Footer from "./footer";
import ContactForm from "./contact";
import About from "./about";
import DateObject from "react-date-object";


export default function Body() {
  let date1 = new DateObject();
  let date = new Date();
  let hours = date.getHours();
  let timeofDay;
  if (hours < 12) {
    timeofDay = "morning";
  } else if (hours < 17) {
    timeofDay = "Afternoon";
  } else {
    timeofDay = "Evening";
  }
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
              <h1>Welcome!</h1>
              <h2>{date1.format()}</h2>
              <h3>Good {timeofDay}</h3>
            </div>
            <div className="innerDiv">
              Coded Elements From buttons, to inputs, navbars, alerts or cards,
              you are covered
            </div>
          </div>
        </div>
      </div>
      <TechPortfolio />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}
