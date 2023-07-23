import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./Experience.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";



const experiences = [
    {
        title: "React.js Developer",
        company_name: "GrowMore",
        icon: <FontAwesomeIcon icon={faReact} />,
        iconBg: "#383E56",
        date: "10 May 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];


const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                experience.icon
            }
        >
            <div>
                <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
                <p
                    className='text-secondary text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className='mt-2 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};



function Experience() {
    return (
        <section id="Experience">
            <div className="container">
                <div className="container-experience">
                    <div>
                        <p className={`text-center`} data-aos="fade-right">
                            What I have done so far
                        </p>
                        <h2 className={`text-center`}>
                            Work Experience.
                        </h2>
                    </div>
                    <div className="mt-20 flex flex-col">
                        <VerticalTimeline>
                            {experiences.map((experience, index) => (
                                <ExperienceCard
                                    key={`experience-${index}`}
                                    experience={experience}
                                />
                            ))}
                        </VerticalTimeline>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience