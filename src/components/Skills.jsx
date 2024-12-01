import React, { useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../styles/skills.css";
import { Progress } from "rsuite";
import "../../node_modules/rsuite/dist/rsuite.min.css";
import { pageIds } from "../utils/contants";

export const Skills = () => {
  const skillsData = [
    {
      percent: 100,
      status: "active",
      trailColor: "red",
      strokeColor: "yellow",
      name: "HTML5",
    },

    {
      percent: 60,
      status: "active",
      trailColor: "red",
      strokeColor: "yellow",
      name: "CSS3",
    },

    {
      percent: 50,
      status: "active",
      trailColor: "red",
      strokeColor: "yellow",
      name: "Javascript",
    },

    {
      percent: 25,
      status: "active",
      trailColor: "red",
      strokeColor: "yellow",
      name: "React Js",
    },

    {
      percent: 80,
      status: "active",
      trailColor: "red",
      strokeColor: "yellow",
      name: "Core Java",
    },


    {
      percent: 70,
      status: "active",
      trailColor: "red",
      strokeColor: "yellow",
      name: "C & C++",
    },
    {
      percent: 60,
      status: "active",
      trailColor: "red",
      strokeColor: "yellow",
      name: "MSword",
    },
    {
      percent: 70,
      status: "active",
      trailColor: "red",
      strokeColor: "yellow",
      name: "MySql",
    },
    {
      percent: 50,
      status: "active",
      trailColor: "red",
      strokeColor: "yellow",
      name: "Data Structures & Algorithm",
    },

    {
      percent: 60,
      status: "active",
      trailColor: "red",
      strokeColor: "yellow",
      name: "Git/Github",
    },

    {
      percent: 50,
      status: "active",
      trailColor: "red",
      strokeColor: "yellow",
      name: "DevOps",
    },
  ];

  return (
    <div className="main" id={pageIds.skills}>
      <h1>Skills</h1>
      <div className="circles">
        {skillsData.map((obj) => {
          return (
            <div className="circletext">
              <div className="circle">
                <Progress.Circle
                  percent={obj.percent}
                  status={obj.status}
                  trailColor={obj.trailColor}
                  strokeColor={obj.strokeColor}
                />
              </div>
              <p>{obj.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
