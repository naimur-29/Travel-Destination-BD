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
            <Link>
              <FaFacebookF />
            </Link>

            <Link>
              <FaInstagram />
            </Link>

            <Link>
              <FaLinkedinIn />
            </Link>

            <Link>
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
          <h1>helkp section </h1>
          <h1>helkp section </h1>
          <h1>helkp section </h1>
        </div>
        {/* help section ends */}

        {/* have question section starts  */}
        <div className="haveQuestiuons">
          <h1>have question </h1>
          <h1>have question </h1>
          <h1>have question </h1>
        </div>
        {/* have question section ends */}

        {/* accept payment icon starts  */}
        <div className="acceptPaymentIcon">
          <h1>accept payment icon</h1>
          <h1>accept payment icon</h1>
          <h1>accept payment icon</h1>
        </div>
        {/* accept payment icon ends  */}
      </div>
    </div>
  );
};

export default Footer;
