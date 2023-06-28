import React from "react";
import "./styles.css";

const TechPortfolio = () => {
  const handleCardHover = (event) => {
    event.currentTarget.classList.toggle("hover");
  };

  return (
    <div className="wrapper">
      <h1>Kene's Major Projects</h1>
      <div className="cols">
        <div className="col" onTouchStart={handleCardHover}>
          <div className="container">
            <div
              className="front"
              style={{ backgroundImage: "url(https://unsplash.it/500/500/)" }}
            >
              <div className="inner">
                <p>E-commerce Website</p>
                <span>
                  Building an E-commerce Website with React, 
                  TypeScript &
                  Node.js
                </span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  Building an E-commerce website using React, TypeScript,
                  Node.js, and CSS offers a powerful and flexible foundation for
                  creating a feature-rich online store.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col" onTouchStart={handleCardHover}>
          <div className="container">
            <div
              className="front"
              style={{ backgroundImage: "url(https://unsplash.it/500/500/)" }}
            >
              <div className="inner">
                <p>Weather-App</p>
                <span>
                  A React and TypeScript Application Powered by Weather API
                </span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  The weather app built with React, TypeScript, and a Weather
                  API provides users with an intuitive and visually appealing
                  interface to access current and forecasted weather conditions
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col" onTouchStart={handleCardHover}>
          <div className="container">
            <div
              className="front"
              style={{ backgroundImage: "url(https://unsplash.it/500/500/)" }}
            >
              <div className="inner">
                <p>Group Chat</p>
                <span>
                  Real-Time Communication with Socket, React, TypeScript, and
                  CSS
                </span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  The group chat application, built with Socket, React,
                  TypeScript, and CSS, provides users with a dynamic and
                  interactive platform for real-time communication.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col" onTouchStart={handleCardHover}>
          <div className="container">
            <div
              className="front"
              style={{ backgroundImage: "url(https://unsplash.it/500/500/)" }}
            >
              <div className="inner">
                <p>Hotel Booking App</p>
                <span>
                  Streamlined Reservations with React, TypeScript & Node.js
                </span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  provides travelers with a streamlined and user-friendly
                  platform to search, compare, and reserve hotel accommodations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col" onTouchStart={handleCardHover}>
          <div className="container">
            <div
              className="front"
              style={{ backgroundImage: "url(https://unsplash.it/500/500/)" }}
            >
              <div className="inner">
                <p>AI ChatBot</p>
                <span>
                  {" "}
                  Enhancing User Interactions with Python and a Predefined
                  Intent
                </span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  AI chatbot with Python and a predefined intent framework
                  empowers businesses to deliver personalized and efficient
                  support to their customers
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col" onTouchStart={handleCardHover}>
          <div className="container">
            <div
              className="front"
              style={{ backgroundImage: "url(https://unsplash.it/500/500/)" }}
            >
              <div className="inner">
                <p> School Portal</p>
                <span>
                  Streamlining School Operations with HTML, CSS, and Node.js
                </span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  Schools can create a digital ecosystem that simplifies
                  administrative tasks, enhances collaboration, and strengthens
                  the school community as a whole.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechPortfolio;
