import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./projects.css"
import ProjectCard from '../projectCard/ProjectCard';
import booking from "../../assets/imges/booking.png"
import secrets from "../../assets/imges/secrets.png"
import woodworks from "../../assets/imges/woodworks.png"
import GoogleNote from "../../assets/imges/GoogleNote.png"




function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component="span" >{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Projects() {
    const [value, setValue] = React.useState(0);
    const data = [{ img: booking,title:"BookEasy", desc: "Made the Full Stack Booking Application which allows us to book hotels accross the globe.",link:"https://github.com/Tushar106/BookingApp" },{ img: GoogleNote,title:"KeeperApp", desc: "Made a replica of Google Notes during learning. Made the use of React hooks for the application.",link:"https://github.com/Tushar106/Google-Notes" },{ img: secrets,title:"Secrets", desc: "Made the Full Stack Secrets storing application that saves the secrets of each individual separately.",link:"https://github.com/Tushar106/authentication" },{ img: woodworks,title:"Woodworks", desc: "Made the  Application with the use of Bootstrap for demonstrating the front-end.",link:"https://github.com/Tushar106/Woodworks" }]


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };  
    return (
        <section id="projects">
            <div className="container">
                <div className="container-projects">
                    <div className="row">
                        <div className="col-12 project-col">
                            <h1>PROJECTS</h1>
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{ bgcolor: " rgb(255 255 255 / 10%)", display: "flex", justifyContent: "center", borderRadius: "20px" }}>
                                        <Tab label="Item One" {...a11yProps(0)} />
                                        <Tab label="Item Two" {...a11yProps(1)} disabled={true} />
                                        <Tab label="Item Three" {...a11yProps(2)} disabled={true} />
                                    </Tabs>
                                </Box>
                                <TabPanel value={value} index={0}>
                                    <div className="project-border">
                                        <div className="row justify-content-center" style={{ rowGap: "20px" }}>
                                            {data.map((item,index) => {
                                                return (
                                                    <div className="col-lg-3" key={index}>
                                                        <ProjectCard img={item.img} desc={item.desc} title={item.title} link={item.link} />
                                                    </div>
                                                )
                                            })} 
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    Item Two
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    Item Three
                                </TabPanel>
                            </Box>


                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Projects;