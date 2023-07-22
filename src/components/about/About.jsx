import React from "react";
import "./about.css"
import { Tilt } from 'react-tilt'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import icon from "../../assets/imges/developer.png"

const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
const AboutCard = ({ item }) => {
    return (
        <Tilt style={{ height: "100%", width: "100%" }}>
            <img
            height={"100%"}
            width={"100%"}
                src={icon}
                alt='Developer'
                className='w-16 h-16 object-contain'
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
                            <p className='text-center' style={{ padding: "20px" }}>
                                As a software developer specializing in the MERN (MongoDB, Express.js, React, Node.js) stack, I have the expertise to design, develop, and deploy robust web applications. With a strong foundation in both frontend and backend technologies, I bring a comprehensive skill set to deliver end-to-end solutions.
                                <br />
                                <br />
                                In my role, I utilize MongoDB as the database to store and manage data efficiently. I leverage Express.js, a flexible and lightweight web application framework, to build scalable backend APIs and handle server-side logic. With Node.js, I handle server-side scripting and develop high-performance applications that handle concurrent requests seamlessly.
                                <br />
                                <br />
                                On the frontend, I harness the power of React to create dynamic and interactive user interfaces. I build reusable components, implement state management, and ensure an intuitive user experience. My proficiency in HTML, CSS, and JavaScript allows me to craft visually appealing and responsive interfaces that align with modern design standards.
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
    )
}
export default About;