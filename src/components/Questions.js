import React from 'react'

function Questions({question, options, selected}) {
  const [answer, setAnswer] = React.useState(options)
  const [disable, setDisable] = React.useState(false)


  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button disabled={disable}
        key={index} 
        className='answerBtn' 
        onClick={() => {setAnswer([text])
          selected(text)
          setDisable(true)
        }}
        >
          {text}
        </button>
      ))}
    </div>
  )
}

export default Questions;



