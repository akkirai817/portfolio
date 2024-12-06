import React, { useEffect } from "react";
import "../styles/team.css";
import VanillaTilt from "vanilla-tilt";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { pageIds } from "../utils/contants";

export const Teams = () => {
  const members = [
    {
      name: "Ankit Rai",
      role: "front-End developer",
      dp: "/images/akki.png",
      linkdn: "https://www.linkedin.com/in/ankit-rai-a4a692249/",
      dec: " Currently pursuing B.Tech in Computer Science and Engineering, actively seeking opportunities in frontend development.",
    },

    {
      name: "Vicky Singh",
      role: "Software Engineer",
      dp: "https://media.licdn.com/dms/image/v2/C4E03AQFfLGm6XE34_Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1623160865998?e=1738195200&v=beta&t=4McDXxxwD4BLJxxUdGFBrLl0a77oV0IAzZew6JBsJ1A",
      linkdn: "https://www.linkedin.com/in/vicky-kumar-singh-444a32156/",
      dec: " Computer Science and Engineering, actively working as a software engineering with 4 year exprienc at netlink.",
    },

    {
      name: "Asgar Ansari ",
      role: "front-End developer",
      dp: "/images/sc1.png",
      linkdn: "https://www.linkedin.com/in/asgar-ansari/",
      dec: " Currently pursuing B.Tech in Computer Science and Engineering, actively seeking opportunities in frontend development.",
    },


    {
      name: "Vivek Kumar singh",
      role: "full stack  developer",
      dp: "/images/vivek.jpeg",
      linkdn: "https://www.linkedin.com/in/vivek-kumar-singh-755b761a3/",
      dec: "Senior System Engineer",
    },

    {
      name: "Aszad Raza",
      role: "front-End developer",
      dp: "https://media.licdn.com/dms/image/v2/D4D03AQGEQ5mBkPEX2g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1672602381742?e=1738195200&v=beta&t=1D1OJmp8pBt4_G9uLLbGgG6kSyFIybwmuDx72kha-Jg",
      linkdn: "https://www.linkedin.com/in/aszad-raza/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BxE7MbaC%2FT%2BqB2AtW4T3GQw%3D%3D",
      dec: " Currently pursuing B.Tech in Computer Science and Engineering, actively seeking opportunities in frontend development.",
    },


    
    
  ];

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
  });

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container" id={pageIds.teams}>
      <h1>Teams</h1>

      <div className="cards">
        <Slider {...settings}>
          {members.map((obj) => {
            return (
              <div className="card">
                <div className="profileDp">
                  {" "}
                  <img src={obj.dp} alt="" />
                </div>
                <b>{obj.name}</b>
                <p>{obj.dec}</p>

                <button>
                  <a href={obj.linkdn}>View profile</a>
                </button>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
