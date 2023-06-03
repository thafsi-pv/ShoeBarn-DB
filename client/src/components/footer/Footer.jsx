import React from "react";
import "./footer.css";
import { FiYoutube, FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <a href="#">
            <FiFacebook className="social" />
          </a>
          <a href="#">
            <FiInstagram className="social" />
          </a>
          <a href="#">
            <FiYoutube className="social" />
          </a>
          <a href="#">
            <FiTwitter className="social" />
          </a>
        </div>

        <div className="row">
          <ul>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>

        <div className="row">SHOEBARN Copyright © 2023 - All rights reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
