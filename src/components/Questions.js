import React from 'react'

function Questions({question, options}) {
  const [answer, setAnswer] = React.useState(options)

  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button 
        key={index} 
        className='answerBtn' 
        onClick={() => {setAnswer([text])
        }}
        >
          {text}
        </button>
      ))}
    </div>
  )
}

export default Questions;



