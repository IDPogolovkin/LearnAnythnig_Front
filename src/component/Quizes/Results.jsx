import React from 'react'
import './quizes.css'
import questions from './questions'

const Results = ({correct}) => {
  return (
    <div className="result">
    <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
    <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
    <button>Попробовать снова</button>
  </div>
  )
}

export default Results