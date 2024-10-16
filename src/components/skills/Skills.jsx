import React from "react";
import "./skills.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import GaugeChart from 'react-gauge-chart';
function Skills() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 760 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 760, min: 0 },
            items: 1
        }
    };

    return (
        <section id="skills">
            <div className="container p-4">
                <div className="container-skill">
                    <div className="row">
                        <div className="col-lg-12 skill-col">
                            <h1>SKILLS</h1>
                            <p>I am happy to share that I have learnt a lot of skills both in technical and soft skills</p>
                            <div className="skill-slider">
                                <Carousel responsive={responsive} infinite={true}>
                                    
                                  <div className="skill-item">
                                    <h1>Javascript</h1>
                                        <GaugeChart id="gauge-chart1"
                                        percent={0.70}
                                        />
                                    </div>
                                    
                                    <div className="skill-item">
                                    <h1>Bootstrap</h1>
                                        <GaugeChart id="gauge-chart1"
                                        percent={0.70}
                                        />
                                    </div>
                                    <div className="skill-item">
                                    <h1>React.js</h1>
                                        <GaugeChart id="gauge-chart1"
                                        percent={0.65}
                                        />
                                    </div>
                                    <div className="skill-item">
                                    <h1>Django</h1>
                                        <GaugeChart id="gauge-chart1"
                                        percent={0.65}
                                        />
                                    </div>
                                    {/* <div className="skill-item">
                                    <h1>MongoDb</h1>
                                        <GaugeChart id="gauge-chart1"
                                        percent={0.70}
                                        />
                                    </div> */}
                                    {/* <div className="skill-item"> */}
                                    {/* <h1>Firebase</h1>
                                        <GaugeChart id="gauge-chart1"
                                        percent={0.60}
                                        />
                                    </div> */}
                                    <div className="skill-item">
                                    <h1>MongoDB</h1>
                                        <GaugeChart id="gauge-chart1"
                                        percent={0.80}
                                        />
                                    </div>
                                    <div className="skill-item">
                                    <h1>HTML</h1>
                                    <GaugeChart id="gauge-chart1"
                                    percent={0.80} 
                                        />
                                    </div>
                                    <div className="skill-item">
                                    <h1>CSS</h1>
                                        <GaugeChart id="gauge-chart1"
                                        percent={0.70}
                                        />
                                    </div>
                                </Carousel>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills