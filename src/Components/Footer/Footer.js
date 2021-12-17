import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-Flud">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <ul className="footer--List">
                <h3 className="footer--List--Heading">Get to know us</h3>
                <li>
                  <span>About Us</span>
                </li>
                <li>
                  <span>Careers</span>
                </li>
                <li>
                  <span>Press Releases</span>
                </li>
                <li>
                  <span>Amazon Cares</span>
                </li>
                <li>
                  <span>Gift a Smile</span>
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <ul className="footer--List">
                <h3 className="footer--List--Heading">Connect with us</h3>
                <li>
                  <span>Facebook</span>
                </li>
                <li>
                  <span>Twitter</span>
                </li>
                <li>
                  <span>Instagram</span>
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <ul className="footer--List">
                <h3 className="footer--List--Heading">Make money with us</h3>
                <li>
                  <span>Sell on Amazon</span>
                </li>
                <li>
                  <span>Become an Affiliate</span>
                </li>
                <li>
                  <span>Amazon Global Selling</span>
                </li>
                <li>
                  <span>Advertise Your Products</span>
                </li>
                <li>
                  <span>Fulfilment by Amazon</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
