import React from "react";
import "./about.css";
import { Tilt } from "react-tilt";
import icon from "../../assets/imges/developer.png";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};
const AboutCard = ({ item }) => {
  return (
    <Tilt style={{ height: "100%", width: "100%" }}>
      <img
        height={"100%"}
        width={"100%"}
        src={icon}
        alt="Developer"
        className="w-16 h-16 object-contain"
      />
    </Tilt>
  );
};
function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="container-about">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="about-heading">About</h1>
              <p className="text-center" style={{ padding: "20px" }}>
                I am currently pursuing a Bachelor's in Computer Science and
                Engineering at Deenbandhu Chhotu Ram University of Science and
                Technology, with a minor in Data Science. My academic background
                has provided me with strong fundamentals in data structures,
                operating systems, and DBMS, along with hands-on experience in
                C++, Python, and web development technologies. I take pride in
                my academic achievements, including a CGPA of 7.25 and 95% marks
                in 12th grade. My passion for technology drives me to
                continuously learn and improve.
                <br />
                <br />
                Throughout my journey, I’ve worked on a variety of projects that
                have honed my full-stack development and machine learning
                skills. For instance, I developed and deployed a responsive tour
                and travel website using ReactJS and Tailwind CSS, optimizing it
                for user experience and performance. I also built a house price
                prediction model using machine learning algorithms, creating a
                user-friendly interface with Django. These experiences have
                equipped me with expertise in React, Django, MySQL, MongoDB, and
                various web technologies.
                <br />
                <br />
                Looking ahead, I am eager to advance my career by contributing
                to innovative tech solutions. My focus is on further developing
                my skills in AI, cloud computing, and software architecture. I
                am particularly interested in roles that challenge me to combine
                machine learning with full-stack development to create impactful
                applications that solve real-world problems.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="container">
                <AboutCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
