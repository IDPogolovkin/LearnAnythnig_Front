import React from 'react'
import Game from './Game'
import './quizes.css'
import questions from './questions'
import Results from './Results'

const Quizes = () => {
    const [step, setStep] = React.useState(0)
    const question = questions[step]
    const [correct, setCorrect] = React.useState(0)
    const [answers, setAnswers] = React.useState('');

    const onClickVariant = (index) =>{
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const answer = alphabet[index];
        setAnswers((prevAnswers) => prevAnswers + answer);
        setStep(step+1)
        console.log('answer', answer)

        if (index === question.correct){
            setCorrect(correct+1)
        }
    }

    React.useEffect(() => {
        console.log('answers', answers);
      }, [answers]);
    


  return (
    <div className='body-quiz'>
        <div className="main-quiz">
            {
                step !== questions.length ? (
                     <Game step={step} question={question} onClickVariant={onClickVariant}/>)
                     :(
                    <Results correct={correct} answers={answers}/>)
            }
        </div>
    </div>
  )
}

export default Quizes