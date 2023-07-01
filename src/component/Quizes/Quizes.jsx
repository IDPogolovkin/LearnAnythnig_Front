import React from 'react'
import Game from './Game'
import './quizes.css'
import questions from './questions'
import Results from './Results'

const Quizes = () => {
    const [step, setStep] = React.useState(0)
    const question = questions[step]
    const [correct, setCorrect] = React.useState(0)

    const onClickVariant = (index) =>{
        setStep(step+1)

        if (index === question.correct){
            setCorrect(correct+1)
        }
    }

  return (
    <div className='body-quiz'>
        <div className="main-quiz">
            {
                step !== questions.length ? (
                     <Game step={step} question={question} onClickVariant={onClickVariant}/>)
                     :(
                    <Results correct={correct} />)
            }
        </div>
    </div>
  )
}

export default Quizes