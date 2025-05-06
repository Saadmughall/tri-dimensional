import React from "react";
import "./Footer.css";
import { FaTelegramPlane } from "react-icons/fa";
import resume from "../../assets/Resume.pdf";
import logo from "../../assets/logo.png";
import Copy from "../Copy/Copy";
export default function Footer() {
  const handleDownload = () => {
    window.open(resume, "_blank");
  };
  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/muhammad-saad-iqbal-823380108/", "_blank");
  }
    const handleGithub = () => {
        window.open("https://github.com/Saadmughall", "_blank");
    }
    const handleFacebook = () => {
        window.open("https://www.facebook.com/saadmughal23/", "_blank");
    }
    const handleInstagram = () => {
        window.open("https://www.instagram.com/tridimensional_.dev/", "_blank");
    }
  return (
    <div className="footer" id="footer-section">
      <div className="inner-footer">
        <div className="footer-top">
          <div className="slide" onClick={handleDownload}>
            <div className="overlay"></div>
            <div className="inner-slide">
              <h1>
                {" "}
                <span>GET</span> <span>ME</span>
              </h1>
              <FaTelegramPlane className="icon" />
            </div>
            <div className="inner-slide">
              <h1>GET ME</h1>
              <FaTelegramPlane className="icon" />
            </div>
            <div className="inner-slide">
              <h1>GET ME</h1>
              <FaTelegramPlane className="icon" />
            </div>
            <div className="inner-slide">
              <h1>GET ME</h1>
              <FaTelegramPlane className="icon" />
            </div>
            <div className="inner-slide">
              <h1>GET ME</h1>
              <FaTelegramPlane className="icon" />
            </div>
            <div className="inner-slide">
              <h1>GET ME</h1>
              <FaTelegramPlane className="icon" />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="bottom-left1">
            <div className="social">
              <div className="social-one">
                <ul>
                  Contact
                  <Copy>
                    <li onClick={handleLinkedin}>Linkedin</li>
                    <li onClick={handleGithub}>Github</li>
                    <li onClick={handleFacebook}>Facebook</li>
                  </Copy>
                </ul>
              </div>
              <div className="social-two">
                <ul>
                  Links
                  <Copy>
                    <li onClick={handleInstagram}>Instagram</li>
                  </Copy>
                </ul>
              </div>
            </div>
            <div className="copyright">
              <div className="copyright-img">
                <img src={logo} alt="" />
              </div>
              <div className="copyright-text">
                <h1>All Rights Reserved</h1>
                <h1>© 2025 Muhammad Saad</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
