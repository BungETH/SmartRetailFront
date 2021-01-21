//npm import
import React from "react";
import PropTypes from "prop-types";
import RoomIcon from "@material-ui/icons/Room";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
//local import


const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">
        <h4>CONTACT US</h4>
        <div className="place">
          <RoomIcon />
          <i>ThemesGround, 789 Main rd, Anytown, CA 12345 USA</i>
        </div>
        <div className="phone">
          <PhoneAndroidIcon />
          <i>+(888) 123-4567 +(888) 456-7890</i>
        </div>
        <div className="email">
          <MailOutlineIcon />
          <i>contact@smartretail.co</i>
        </div>
      </div>
      <div className="customer-service">
        <h4>CUSTOMER SERVICE</h4>
        <ul>
          <li>My Account</li>
          <li>Order History</li>
          <li>FAQ</li>
          <li>Specials</li>
          <li>Help Center</li>
        </ul>
      </div>
      <div className="corporation">
        <h4>CORPORATION</h4>
        <ul>
          <li>About Us</li>
          <li>Customer Service</li>
          <li>Company</li>
          <li>Investor Relations</li>
          <li>Advanced Search</li>
        </ul>
      </div>
      <div className="why-us">
        <h4>WHY CHOOSE US</h4>
        <ul>
          <li>Shopping Guide</li>
          <li>Blog</li>
          <li>Company</li>
          <li>Investor Relations</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
