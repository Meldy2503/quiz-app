import React from "react";
import "./components/style.css";
import index from "./components/data";
import Question from "./components/Questions";
import Result from "./components/Result";

class App extends React.Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0,
  };

  getQuestions = () => {
    index().then((question) => {
      this.setState({
        questionBank: question,
      });
    });
  };

  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
    });
  };
  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0,
    });
  };

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <div className="container">
        <div className="title">QuizBee</div>
        {this.state.questionBank.length > 0 &&
          this.state.responses < 5 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => (
              <Question
                key={questionId}
                question={question}
                options={answers}
                selected={(answer) => this.computeAnswer(answer, correct)}
              />
            )
          )}
        {this.state.responses === 5 ? (
          <Result score={this.state.score} playAgain={this.playAgain} />
        ) : null}
      </div>
    );
  }
}

export default App;
