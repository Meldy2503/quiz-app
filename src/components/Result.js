import React from 'react'

function Result({score, playAgain}) {
    return (
        <div className='score-board'>
           <div className='score'>Your score is {score}/5 </div>  
           <button className='playBtn' onClick={playAgain}>Play again!</button>          
        </div>
    )
}

export default Result
