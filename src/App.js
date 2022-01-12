import React from 'react';
import "./assets/style.css";
import index from './quizService/index';
import Question from './components/Questions';
import Result from './components/Result';

class App extends React.Component {
    state = {                           
      questionBank: [],
      score: 0, 
      responses: 0
    };

  //  function  App(props) {
  //    const [state, setState] = React.useState({
  //     questionBank: [],
  //     score: 0, 
  //     responses: 0
  //    });
    

    getQuestions = () => {
      index().then (question => {
        this.setState ({
          questionBank: question
        });
      });
    };
    
    //  getQuestions = () => {
    //   setState ({
    //       questionBank: props.question
    //     });
    

     computeAnswer = (answer, correctAnswer) => {
      if (answer === correctAnswer) {
       this.setState({
         score: this.state.score + 1
         });
      }
      this.setState({
        responses: this.state.responses < 5 ? this.state.responses + 1 : 5
      });
    };
     playAgain = () => {
      this.getQuestions();
      this.setState({
        score: 0,
        responses: 0,
      })
    }
  
       componentDidMount() {
       this.getQuestions();
        }
    // React.useEffect(() => {
    //   getQuestions();
    // }, [])

     render () {
      return (
        <div className='container'>
           <div className='title'>QuizBee</div>
           {this.state.questionBank.length > 0 && 
           this.state.responses < 5 &&
           this.state.questionBank.map(
            ({question, answers, correct, questionId}) => (
        <Question 
           key={questionId} 
          question={question} 
          options={answers}
          selected={answer => this.computeAnswer(answer, correct)} 
           /> )
          )} 
          {this.state.responses === 5 ? 
          (<Result score={this.state.score} 
          playAgain={this.playAgain} />) : null}
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
