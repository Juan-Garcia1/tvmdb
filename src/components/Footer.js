import React from "react";

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-row">
        <div className="footer-col">
          <p>
            The Tvmdb is a place to search for your favorite movies and tv
            shows. Built with React, Redux and{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.netlify.com/docs/functions/"
            >
              Netlify Lambda functions
            </a>
            .
          </p>
          <div className="social-links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://juan-garcia1.github.io/portfolio"
            >
              Portfolio
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/juan-garcia1"
            >
              Github
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://codepen.io/-J0hn-/"
            >
              Codepen
            </a>
          </div>
        </div>
        <div className="footer-col">
          <img
            className="footer-img"
            src="https://www.themoviedb.org/assets/1/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png"
            alt="powered by themoviedb"
          />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
