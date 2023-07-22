import React from "react";
import "./project.css"
function ProjectCard(props) {
    return (
        <div data-aos="fade-up-right" className="card">
            <img src={props.img} className="card-img-top" alt="Fissure in Sandstone" height={"164.91px"} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text" style={{ color: "black" }}>{props.desc}</p>
                <a href={props.link} className="btn btn-primary">Link</a>
            </div>
        </div>
            )
}
            export default ProjectCard;