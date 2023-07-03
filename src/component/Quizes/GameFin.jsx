import React from 'react'


const GameFin = ({ questions, step, question, onClickVariant }) => {
  const persentage = Math.round(step / questions.length * 100);
  console.log(questions, step, question, onClickVariant)

  const handleOnClickVariant = (index) => {
    if (typeof onClickVariant === 'function') {
      onClickVariant(index);
    }
  };
  const variants = question.variants.split(', ');

  return (
    <>
      <div className="progress">
        <div style={{ width: `${persentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        <li onClick={() => handleOnClickVariant(0)}>{variants[0]}</li>
        <li onClick={() => handleOnClickVariant(1)}>{variants[1]}</li>
        <li onClick={() => handleOnClickVariant(2)}>{variants[2]}</li>
        <li onClick={() => handleOnClickVariant(3)}>{variants[3]}</li>
      </ul>
    </>
  );
};
export default GameFin