import React from "react";
import "../styles/projects.css";
import { pageIds } from "../utils/contants";
import { projectList } from "./projectsList";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const Projects = () => {
  const navigate = useNavigate();

  const handleGithub = (url) => {
    if (url.startsWith("http")) {
      window.location.href = url;
    } else {
      navigate(url);
    }
  };
  const handleLive = (url) => {
    if (url.startsWith("http")) {
      window.location.href = url;
    } else {
      navigate(url);
    }
  };

  return (
    <>
      <h1 id="h1">Projects</h1>
      <div className="containerdiv" id={pageIds.projects}>
        {projectList.map((obj) => {
          return (
            <div className="projectsBox">
              <img src={obj.image} />

              <div className="buttons">
                <div>
                  <h4>{obj.para}</h4>
                  <p>{obj.tech}</p>
                </div>
                <div className="btnsDiv">
                  <button
                    className="optionbtns"
                    onClick={() => handleGithub(obj.githublink)}
                  >
                    <FaGithub />
                  </button>
                  {obj.liveLink && (
                    <button
                      className="optionbtns"
                      onClick={() => handleLive(obj.liveLink)}
                    >
                      <FaEye />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
