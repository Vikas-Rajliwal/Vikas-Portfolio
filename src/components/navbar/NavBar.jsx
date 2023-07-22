import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebook, faGithub, faLinkedin , } from '@fortawesome/free-brands-svg-icons';
import './navbar.css'




import { useState,useEffect } from 'react';
import ToggleIcon from '../toggleIcon/ToggleIcon';

function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
    <Navbar  expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home" className='my-name'><h1>Tushar-Bhatia</h1></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav custom-toggler" >
            <ToggleIcon/>
            </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a  className='icon' href="#"><FontAwesomeIcon icon={faFacebook} size={"2x"} style={{color:"white"}}/></a>
                <a className='icon' href="https://github.com/Tushar106"><FontAwesomeIcon icon={faGithub}size={"2x"} style={{color:"white"}}/></a>
                <a className='icon' href="https://www.linkedin.com/in/tushar-bhatia-236111228/"><FontAwesomeIcon icon={faLinkedin} size={"2x"}style={{color:"white"}}/></a>
              </div>
              <a href="https://www.linkedin.com/in/tushar-bhatia-236111228/"><button className='btn-connect'>Let's Connect</button></a>
              </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;