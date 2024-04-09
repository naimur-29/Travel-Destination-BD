import React from "react";
import "./Footer.scss";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.webp";

const aboutContent = [
  {
    link: "/",
    content: "About Flight Expert",
  },
  {
    link: "/",
    content: "Terms and Conditions",
  },
  {
    link: "/",
    content: "Privacy Policy",
  },
];

const helpContent = [
  {
    link: "/",
    content: "FAQS",
  },
  {
    link: "/",
    content: "Payment Methods",
  },
  {
    link: "/",
    content: "Contact Us",
  },
];

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerWrapper ">
        {/* address section starts  */}

        <div className="addressSection">
          {/* address top starts  */}
          <div className="addressTop">
            <img src={Logo} alt="" className="logo" />
          </div>
          {/* address top ends  */}

          {/* address starts  */}
          <div className="addressBody">
            <p>
              House-09 (3rd Floor), Flat-B3, Road-14, Section-1, Uttara,
              Jashimuddin, Dhaka- 1230
            </p>
          </div>
          {/* address ends  */}

          {/* icon container starts  */}
          <div className="iconContainer">
            <Link className="icon">
              <FaFacebookF />
            </Link>

            <Link className="icon">
              <FaInstagram />
            </Link>

            <Link className="icon">
              <FaLinkedinIn />
            </Link>

            <Link className="icon">
              <FaXTwitter />
            </Link>
          </div>
          {/* icon container ends  */}

          {/*  */}
        </div>
        {/* address section ends */}

        {/* about section starts  */}
        <div className="aboutSection">
          <h1 className="aboutHeader">About</h1>

          <div className="aboutContent">
            {aboutContent?.map((content, ind) => (
              <Link className="aboutContentList" key={ind} to={content?.link}>
                <p>{content?.content} </p>
              </Link>
            ))}
          </div>
        </div>
        {/* about section ends  */}

        {/* help section starts  */}
        <div className="helpSection">
          <h1 className="helpHeader">Help</h1>

          <div className="helpContent">
            {helpContent?.map((content, ind) => (
              <Link className="aboutContentList" key={ind} to={content?.link}>
                <p>{content?.content} </p>
              </Link>
            ))}
          </div>
        </div>
        {/* help section ends */}

        {/* have question section starts  */}
        <div className="haveQuestiuons">
          <h1 className="questionHeader">Have Question?</h1>

          <div className="questionBody">
            <p> +880 191111111</p>
            <p>traveldestinationbd@gmail.com</p>
          </div>

          <div className="customerSecviceSection">
            <h1 className="customerSupportHeading">
              Dedicated Customer Support
            </h1>
            <div className="officeTime">
              <p>Sat-Thurs: 9AM-9PM</p>
              <p>Friday/Govt. Holidays: 10AM-6PM</p>
            </div>
          </div>
        </div>
        {/* have question section ends */}

        {/* accept payment icon starts  */}
        <div className="acceptPaymentIcon">
          <h1 className="questionHeader">Accepted Payments</h1>

          <div className="paymentMethodContainer">
            <img
              className="paymentImg"
              src="https://i.ibb.co/SPTQ3QS/bank-logo-a775fd7b-ezgif-com-webp-to-jpg-converter.jpg"
              alt=""
            />
          </div>
        </div>
        {/* accept payment icon ends  */}
      </div>
    </div>
  );
};

export default Footer;
