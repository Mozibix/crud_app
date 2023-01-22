import React from "react";
import { teamInfo } from "../userdata";
import "./About.css";

export const About = () => {
  const teamFlex = teamInfo.map((teamData) => {
    return <Team {...teamData} />;
  });
  return (
    <>
      <section className="team_sec">
        <p className="team_header">Our Amazing Team</p>
        <div className="team_flex">{teamFlex}</div>
      </section>
    </>
  );
};

const Team = (props) => {
  return (
    <>
      <div className="team_flex_inner">
        <div className="team_box">
          <div className="image_sec">
            <img src={props.img_src} alt="team" />
          </div>

          <div className="details_sec">
            <p className="name">{props.name}</p>
            <p className="profession">{props.profession}</p>
          </div>
        </div>
      </div>
    </>
  );
};
