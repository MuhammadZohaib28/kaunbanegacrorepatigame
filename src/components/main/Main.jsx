import React from 'react'
import './main.css'
import Quiz from '../quiz/Quiz'

const Main = () => {
  return (
    <div className='mainContainer'>
        <div className="mainTopContainer">
            <div className="mainTopTimerContainer">
                30
            </div>
        </div>
        <div className="mainBottomContainer">
            <Quiz />
        </div>
    </div>
  )
}

export default Main