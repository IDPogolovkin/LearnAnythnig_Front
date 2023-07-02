import React from 'react';
import teamPic from '../../../Assets/about.svg';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <section className="about overflow-hidden py-5">
            <div className="row w-100">
                <div className="row col-md-11 mx-auto ">
                    <div className="col-md-6 img">
                        <Fade duration={2000} left>
                            <img src={`${teamPic}`} alt="" className="img-fluid" />
                        </Fade>
                    </div>
                    <div className="col-md-6 ps-2">
                        <Fade duration={2000} right>
                            <p className="miniTitle">about us</p>
                            <h1 className="headerTitle">EMPOWERING YOUR  <span className="headerHighlight">LEARNING</span> JOURNEY WITH AI</h1>
                            <p className="headerContent">Discovering the perfect educational courses for your goals is made effortless with LearnAnything. Our cutting-edge AI-generated curriculum offers a wide range of subjects tailored to your interests. Our intuitive platform allows you to effortlessly connect with our AI-powered instructors, enabling seamless knowledge transfer. Embrace the future of education as we provide you with comprehensive course offerings and personalized learning experiences. Unlock your potential and achieve your learning goals with LearnAnything.</p>
                            <button className="branBtn">learn More</button>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;