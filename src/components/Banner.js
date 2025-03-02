import { Container , Row , Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useState, useEffect } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const toRotate = [" Software Engineer ", " Web Designer", " UI/UX Designer"];
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
                        <h1>{`Hi, I'm Igor Almeida `}<span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>{text}</span></h1>
                        <p>My name is Igor Almeida, and I am studying Computer Engineering at the University of the State of Amazonas (UEA). I am passionate about technology and have developed strong skills in programming languages like C++, Python, and Java, along with experience in software development, computer systems, hardware design, and networking. At UEA, I have gained both theoretical knowledge and practical experience, which has helped me grow as a versatile engineer. I am always looking for new opportunities to expand my skills and contribute to the tech industry with innovation and problem-solving.</p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
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