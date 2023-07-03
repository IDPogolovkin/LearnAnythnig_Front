import React from 'react'
import Game from './Game'
import './quizes.css'
import ResultFin from './ResultsFin'
import GameFin from './GameFin'

const QuizesFinal = (props) => {
    const [step, setStep] = React.useState(0)
    const questions = props.questions
    const question = questions[step]
    const topic_id = props.topic_id
    const [correct, setCorrect] = React.useState(0)
    const [answers, setAnswers] = React.useState('');

    const onClickVariant = (index) => {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const answer = alphabet[index];
        setAnswers((prevAnswers) => prevAnswers + answer);
        setStep(step + 1)
        console.log('answer', answer)

        if (index === question.correct) {
            setCorrect(correct + 1)
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
                        <GameFin questions={questions} step={step} question={question} onClickVariant={onClickVariant} />)
                        : (
                            <ResultFin questions={questions} correct={correct} answers={answers} topic_id={topic_id} />)
                }
            </div>
        </div>
    )
}

export default QuizesFinal