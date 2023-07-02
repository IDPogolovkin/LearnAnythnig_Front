import React from 'react'
import './quizes.css'
import Spinner from '../Shared/Spinner/Spinner'

const LoaderQuiz = () => {
   

  return (
    <div className='body-quiz'>
        <div className="main-quiz">
          <div className='main-quiz-loader'>
            <Spinner />
          </div>
        </div>
    </div>
  )
}

export default LoaderQuiz