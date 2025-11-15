import { Container , Row , Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useState, useEffect } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const toRotate = [" Software Engineer ", " Web Designer", " UI/UX Designer", "Mobile Developer", "IA"];
    const [isDeleting, setIsDeleting] = useState(false);
    const [text,setText] = useState('');
    const period = 2000;
    const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText (updatedText);
        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        }else{
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    
    return (

        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                    <div className={isVisible ? "animate-animated animate-fadeIn" : ""}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi, I'm Igor Almeida `}<span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ,"Data scientist", "Mobile Developer"]'>{text}</span></h1>
                        <p>Hello! I'm Igor Almeida, a Computer Engineering student at UEA. I am an enthusiast of the limitless potential of computing, with a strong specialization in Artificial Intelligence and Data Science, specifically exploring the capabilities of LLMs.

My technical toolkit is diverse: I develop robust Mobile Applications and have a strong background in Front-end development. I love bridging the gap between backend logic and visual creativity through Web Design, aiming to build complete and impactful digital products</p>
                        <button  onClick={() => console.log('connect')}><a href="#contact">Contact-Me<ArrowRightCircle size={25} /></a></button>
                    </div>}
                        
                    </TrackVisibility>    
                    </Col>
                    
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                             <img src={headerImg} alt="Header Img"/>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}