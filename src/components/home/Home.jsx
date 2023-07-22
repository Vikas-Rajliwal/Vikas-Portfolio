import React from "react";
import "./home.css"
import header from "../../assets/imges/header.svg"
import gi from "../../assets/imges/img.gif"
// portfolio\my-portfolio\src\assets\imges\lf30_WdTEui (1).gif
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleArrowRight} from "@fortawesome/free-solid-svg-icons"

function Home() {
    
    return (
        <section id="home">
            <div className="container">
                <div className="container-grid">
                    <div className="row">
                        <div className="col-lg-6">
                            <span className="big-Heading">Welcome to my Portfolio.</span>
                            <div className="home-text">
                                <h1>Hi I am a Software  <div className="scroller">
                                    <span>
                                        Developer<br />
                                        Designer<br />
                                        Enthusiast<br />
                                        Challenger
                                    </span>
                                </div></h1>
                            </div>
                            <a href="https://www.linkedin.com/in/tushar-bhatia-236111228/"><button className="home-btn">Lets Connect <FontAwesomeIcon icon={faCircleArrowRight} /></button></a>
                        </div>
                        <div className="col-lg-6">
                            <img src={gi} alt="" className="header-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home;