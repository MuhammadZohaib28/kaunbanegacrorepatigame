import React, { useEffect, useState } from "react";
import "./quiz.css";
import data from "./data.js";

const Quiz = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(1000, () =>
      setClassName(a.correct ? "answer correct" : "answer wrong")
    );
    delay(5000, () =>
        {
            if(a.correct){
                setQuestionNumber(prev=>prev + 1);
                setSelectedAnswer(null);
            } else{
                setStop(true);
            }
        }
  );
  };

  return (
    <div className="quizContainer">
      <div className="quizQuestionContainer">{question?.question}</div>
      <div className="quizAnswersContainer">
        {question?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => !selectedAnswer && handleClick(a)}
          >
            {a.text}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
