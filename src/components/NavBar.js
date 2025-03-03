import { useState, useEffect } from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";


export const NavBar = () => {
    
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])   
    
    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }
        
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>                
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home') }>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/igor-almeida-36b7902b5/">
                            <img src={navIcon1} alt="Linkedin"/>
    
                        </a>
                        <a href="https://github.com/Igordev7">
                            <img src={navIcon2} alt="Github"/>
    
                        </a>
                        <a href="http://instagram.com/igu_almeida1">
                            <img src={navIcon3} alt="Instagram"/>
    
                        </a>
                    </div>
                    <a href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSDbFfdNmdpsBxftxrLGkZXskdcWlNjDBqBDJSwcCZGHGWsgMtlsswNjcfSThjqRjQBkvSvX"> 

                    <button className="vvd" onClick={() => console.log('connect')}>
                        <span>Contact-me</span> 
                    </button>
                    </a>
                </span>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    )
}