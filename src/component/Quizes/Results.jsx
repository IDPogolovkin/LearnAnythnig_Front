import React from 'react'
import { Link } from 'react-router-dom';
import './quizes.css'
import questions from './questions'

const Results = ({correct}) => {
  return (
    <div className="result">
    <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
    <h2>You answered {correct} out of {questions.length} questions correctly</h2>
    <Link to='/dashboard/profile'>
      <button>Finish quiz</button>
    </Link>
  </div>
  )
}

export default Results