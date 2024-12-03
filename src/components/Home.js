import React from "react";
import "../styles/home.css";
import { ParticlesBg } from ".";
import Typewriter from "typewriter-effect";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { pageIds } from "../utils/contants";

export const Home = () => {
  return (
    <div className="maincont" id={pageIds.home}>
      <ParticlesBg />
      <div className="dev"></div>
      <div className="name">
        <h1 id="titleHead">
          Hello Everyone, I'm
          <span>
            {" "}
            <Typewriter
              options={{
                strings: [
                  "a ReactJs  Developer",
                  "a Frontend Developer",
                  "a Software Developer",
                  "a DevOps Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />{" "}
          </span>
        </h1>
        <p id="text">
          <b id="p">
            {" "}
            Frontend developer proficient in JavaScript, TypeScript, HTML, CSS,
            Tailwind CSS, React Js, and Material-UI with additional skills in C,
            C++, SQL, Data structures & Algorithm. Currently pursuing B.Tech in
            Computer Science and Engineering, actively seeking opportunities in
            frontend development.
          </b>
        </p>

        <a
          href="/pdf/resume.pdf"
          download="AknitRai-Resume"
          target="_blank"
          rel="noreferrer"
        >
          <button>Hire me</button>
        </a>
      </div>
    </div>
  );
};
