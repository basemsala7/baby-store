import React from "react";
import { FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";

// without resposive
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerCh ">
        <h1>logo</h1>

        <div className="Et">
          <div>
            <h5>ADDRESS:</h5>
            <p>
              123 Street Name, City,<br></br> England
            </p>
          </div>

          <div>
            <h5>PHONE:</h5>
            <p>Toll Free (123) 456-7890</p>
          </div>
        </div>
        <div className="Et">
          <div>
            <h5>EMAIL::</h5>
            <p>mail@example.com</p>
          </div>

          <div>
            <h5>WORKING DAYS/HOURS:</h5>
            <p>Mon-Sun / 9:00AM-8:00PM</p>
          </div>
        </div>

        <div>
          <span>
            <FaInstagram style={{ fontSize: "20px" }} />
          </span>
          <span>
            <BsWhatsapp style={{ fontSize: "20px" }} />
          </span>
          <span>
            <ImFacebook style={{ fontSize: "20px" }} />
          </span>
        </div>
      </div>

      <div className="footerCh ">
        <h5>Account</h5>
        <div className="Et">
          <div>
            <p>Privacy</p>
            <p>Product Support</p>
            <p>FAQs </p>
            <p>Payment Methods </p>
            <p> Shipping Guide</p>
            <p>Track Your Order</p>
          </div>

          <div>
            <p>My Account </p>
            <p>My Account </p>
            <p>My Account </p>
          </div>
        </div>
      </div>

      <div className="footerCh ">
        <h4>Newsletter</h4>

        <div className="Et">
          <p>
            Get all the latest information on Events, <br></br>Sales and Offers.
            Sign up for newsletter today
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
