import React, { useState, useEffect } from "react";
import "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { navMenus } from "../utils/navMenus";
import { isPathActive } from "../utils/util";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const [activePath, setActivePath] = useState(window.location.hash || "");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavItemClick = (link) => {
    setActivePath(link);
    setIsNavOpen(false);
  };

  return (
    <div className={`root ${isScrolled ? "scrolled" : "root"}`}>
      <input type="checkbox" name="checkbox" id="check" checked={isNavOpen} />

      <label className="logo">Ankit</label>

      <label for="check" className="checkBtn" onClick={toggleNav}>
        <FontAwesomeIcon icon={isNavOpen ? faXmark : faBars} size="xl" />
      </label>

      <ul className={isNavOpen ? "open" : ""}>
        {navMenus.map(({ text, link }) => {
          return (
            <li key={link} onClick={() => handleNavItemClick(link)}>
              <a href={link} className={activePath === link ? "active" : ""}>
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
