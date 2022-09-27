import React from "react";
//import { Component } from "react";
import "./cssfooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="divfooter">
      <footer>
        <div className="container">
          <div className="sec about us">
            <h2> About us</h2>
            <ul className="sci">
              <li>
                <a href="#" className="facebook social">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="#" className="twitter social">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#" className="instagram social">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="#" className="youtube social">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </div>

          <div className="sec quickLinks">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="http://localhost:3000/about">About</a>
              </li>

              <li>
                <a href="http://localhost:3000/fragment">Help</a>
              </li>
              <li>
                <a href="http://localhost:3000/TermsAndConditions">Terms & Conditions</a>
              </li>
              <li>
                <a href="http://localhost:3000/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="sec contact">
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span>
                  {" "}
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </span>
                <span>
                  <a href="https://goo.gl/maps/NJa9THyoxfz5F5s29">
                  IACSD Pune
                  </a>
                  <br />
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </span>
                <span>
                  <a href="tel:12345678900">+12345678900</a>
                </span>
                <br />
              </li>
              <li>
                {" "}
                <span>
                  {" "}
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
                <span>
                  {/* <a href="http://localhost:3000/contact"> */}
                    e-Samadhan_forum@gmail.com{" "}
                  {/* </a> */}
                  <br />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="copyrightText">
        <p> Copyright © 2022. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
