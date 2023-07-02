import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './Course.css';
import contactImg from '../../../Assets/contact.svg';
import Fade from 'react-reveal/Fade';
import axiosInstance from '../../../axios'
import Quizes from '../../Quizes/Quizes';
import { Modal } from '@mui/material';
import LoaderQuiz from '../../Quizes/LoaderQuiz';

const Course = () => {
    const [subject, setSubject] = useState('');
    const [questions, setQuestions] = useState([]);
    const [open, setOpen] = useState(false)
    
    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    };
    const handleSubmit = () => {
        axiosInstance.post('test/', {
            "prompt": subject
        }).then((response) => {
            localStorage.setItem("prompt", subject)
            setQuestions(response.data);
        }).catch((error) => {
            console.error(error)
        })
        setOpen(true)
    }

    const handleClose = ()=>{
        setOpen(false)
    }

    useEffect(() => {
        console.log('subject', subject);
    }, [subject]);

    return (
        <section id="contact">
            <Col md={11} className="mx-auto">
                <Row>
                    <Col md={6}>
                        <Fade duration={2000} left>
                            <form className="contactForm">
                                <h5 className="sectionTitle">START YOUR FUTURE RIGHT NOW</h5>
                                <Row>
                                    <Col md={12}>
                                        <input
                                            placeholder="Subject"
                                            type="text"
                                            value={subject}
                                            onChange={handleSubjectChange}
                                            required
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <button className="branBtn" onClick={handleSubmit} type="button">Get Course Now ✨</button>
                            </form>
                        </Fade>
                    </Col>
                    <Col md={6}>
                        <Fade duration={2000} right>
                            <img src={`${contactImg}`} alt="" className="img-fluid" />
                        </Fade>
                    </Col>
                </Row>
            </Col>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                    {questions.length !== 0 ? 
                <Quizes questions={questions}/> : <LoaderQuiz />}
            </Modal>
        </section>
    );
};
export default Course;