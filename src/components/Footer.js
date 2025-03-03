import { Col, Container, Row } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm/>
                    <Col sm={6}>
                        <img src = {logo} alt="logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/igor-almeida-36b7902b5/"><img src={navIcon1}/></a>
                            <a href="https://github.com/Igordev7"><img src={navIcon2}/></a>
                            <a href="http://instagram.com/igu_almeida1"><img src={navIcon3}/></a>
                        </div>
                        <p>CopyRight 2025. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>

    )
}