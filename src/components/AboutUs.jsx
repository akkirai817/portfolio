import React from "react";
import "../styles/about.css";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { pageIds } from "../utils/contants";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const Aboutus = () => {
  const handleClick = (url) => {
    window.location.href = url;
  };

  const btnlogo = [

    {
      logo: <FaGithub />,
      onNav: () => handleClick("https://github.com/akkirai817"),
    },
    {
      logo: <FaInstagram />,
      onNav: () => handleClick("https://www.instagram.com/raiakki817/"),
    },
    {
      logo: <FaLinkedin />,
      onNav: () => handleClick("https://linkedin.com/in/ankit-rai-a4a692249"),
    },
  ];

  return (
    <div className="about" id={pageIds.about}>
      <h1>
        About Us
      </h1>
      <div className="imgbox"></div>
      <div className="textbox">
        <p>
          Hey there! I'm <b> Ankit Rai </b>, A student pursuing Bachelor of
          Technology in Computer Science and Engineering at{" "}
          <b>IES University</b>, Bhopal. I'm currently in my 8th semester, and
          in the last semester, I achieved an SGPA of <b>7.30</b>&nbsp; My goal
          is to launch my career as a MERN stack developer, focusing on both
          frontend and backend skills. I'm determined to improve my abilities in
          designing, planning, and building complex applications. I'm passionate
          about discovering new technologies, especially in the world of modern
          web technologies. I love learning through books, documentation, and
          YouTube videos. I'm fluent in both Hindi and English.
        </p>
        <div className="btns">
          {btnlogo.map((obj) => {
            return <button onClick={obj.onNav}>{obj.logo}</button>;
          })}
        </div>
      </div>
      {/* <h2>Thanks for visit my profile....</h2> */}
    </div>
  );
};
