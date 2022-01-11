import React from 'react';
import "./assets/style.css";
import index from './quizService/index';
import Question from './components/Questions'

class App extends React.Component {
    state = {
      questionBank: []
    };

    getQuestions = () => {
      index().then (question => {
        this.setState ({
          questionBank: question
        });
      });
    };
    componentDidMount() {
      this.getQuestions();
    }

    render () {
      return (
        <div className='container'>
           <div className='title'>QuizBee</div>
           {this.state.questionBank.length > 0 && this.state.questionBank.map(({question, answers, correct, questionId}) => <Question 
           key={questionId} 
          question={question} 
          options={answers} 
           />

          )} 
        </div>
      )
    }


}

// function App() {
//   const [questionBank, setQuestionBank ] = React.useState({
//          questions: ""
//   })

//   function quizQuestions() {
//     const data = questionBank.qBank
//     const getQuestions = data.question
//     setQuestionBank({
//       questions: getQuestions })
//   }


//    return (
//      <div className='container'>
//         <div className='title'>QuizBee</div>
//           <h4>{questionBank.questions}</h4> 
//      </div>
//    )
// }
export default App;
