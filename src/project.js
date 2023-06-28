import React from "react";
import "./styles.css";

const TechPortfolio = () => {
  const handleCardHover = (event) => {
    event.currentTarget.classList.toggle("hover");
  };

  return (
    <section className="wrapper" id="project">
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
                  Building an E-commerce Website with React, TypeScript &
                  Node.js
                </span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  Building an E-commerce website using React, TypeScript,
                  Node.js offers a flexible foundation for creating an online
                  store.
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
                  The weather app built with TypeScript and a Weather API
                  provides users with a visually appealing interface to access
                  current target.
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
                  The group chat application, built with Socket, React &
                  TypeScript provides interactive platform for real-time
                  communication.
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
                  AI chatbot withd a predefined intent framework
                  empowers businesses to deliver efficient support to their
                  customers
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
                  administrative tasks and strengthens
                  the school community as a whole.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechPortfolio;
