import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.jpeg";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/image.png";
import projImg5 from "../assets/img/Figure_1.png";
import projImg6 from "../assets/img/WhatsApp Image 2025-11-15 at 09.41.59.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
     title: "CNN practice",
      description: "I developed a CNN to predict with almost 90% accuracy the Amazonas's River level",
      imgUrl: projImg5,
      projectUrl: "https://github.com/Igordev7/RNN---Previsao-Nivel-do-Rio-Am---Desafio-Bemol-"
      
    },
    {
      title: "Validation of passwords",
      description: "focus in safety and usibility",
      imgUrl: projImg2,
      
      projectUrl: "https://github.com/Igordev7/senha-stem"
    },
    {
      title: "Latiq Site",
      description: "I developed the LATIQ's (University State of Amazonas Laboratory) site contributing with the team",
      imgUrl: projImg4,
      projectUrl: "https://latiquea.vercel.app/"},
    {
      title: "Simple Login interface",
      description: "Interface using Customtkinter in python",
      imgUrl: projImg3,
      projectUrl: "https://github.com/Igordev7/Simple-LogIn-interface.git"
    },
    {
       title: "Flask Bank",
      description: "Online Bank Design and Future plan",
      imgUrl: projImg1,
    },
    {
      title: "Contrate ja",
      description: "I developed an android app focused in services and house's problems fixes w/Kotlin",
      imgUrl: projImg6,
      projectUrl: "https://github.com/Igordev7/ContrateJa.git"
    }
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My Projects</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.slice(0,3).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.slice(3,6).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Empty place(for a while)</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}