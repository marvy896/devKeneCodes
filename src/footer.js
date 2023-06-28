import React from 'react';
import './Footer.css';

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <p>&copy; 2023 DevKeneCodes. All rights reserved.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <ul className="social-icons">
              <li>
                <a href="https://github.com/marvy896" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github">github</i>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin">linked</i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter">twitter</i>
                </a>
              </li>
              <li>
                <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-envelope">E-mail</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};


