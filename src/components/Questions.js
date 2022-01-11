import React from 'react'

function Questions({question, options}) {
  const [answer, setAnswer] = React.useState(options)

  return (
    <div className="questionBox">
      <div className="question">{question}</div>
    </div>
  )
}

export default Questions;


