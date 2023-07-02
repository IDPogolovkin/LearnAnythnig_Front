import React from 'react'
import {useNavigate } from 'react-router-dom';
import './quizes.css'
import axiosInstance from '../../axios';

const Results = ({questions, correct, answers}) => {
  
  const navigate = useNavigate();

  function handleSubmit(event){
    event.preventDefault();
    axiosInstance.post('get-topics/',{
      "answers": answers,
      "prompt": localStorage.getItem("prompt")
    }).then((response)=>{
      navigate('/dashboard/book')
       console.log('response', response.data)
    }).catch((error)=>{
        console.log(error);
    });
  }


  return (
    <div className="result">
    <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
    <h2>You answered {correct} out of {questions.length} questions correctly</h2>
      <button onClick={handleSubmit}>Finish quiz</button>
  </div>
  )
}

export default Results