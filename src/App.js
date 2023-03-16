import React, { useState } from "react";
import "./App.css";

function App() {

  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "How many letters in sanskrit?",
      options: [
        { id: 0, text: "45", isCorrect: false },
        { id: 1, text: "56", isCorrect: false },
        { id: 2, text: "54", isCorrect: false },
        { id: 3, text: "46", isCorrect: true },
      ],
    },
    {
      text: "How many letters in Telugu?",
      options: [
        { id: 0, text: "56", isCorrect: true },
        { id: 1, text: "53", isCorrect: false },
        { id: 2, text: "45", isCorrect: false },
        { id: 3, text: "55", isCorrect: false },
      ],
    },
    {
      text: "The four major literary languages in The Dravidian languages ?",
      options: [
        { id: 0, text: "telugu", isCorrect: false },
        { id: 1, text: "tamil and malaylam", isCorrect: false },
        { id: 2, text: "kannada", isCorrect: false },
        { id: 3, text: "all of the above", isCorrect: true },
      ],
    },
    {
      text: "What is the language of aryans?",
      options: [
        { id: 0, text: "mangolia", isCorrect: false },
        { id: 1, text: "sanskrit", isCorrect: true },
        { id: 2, text: "dravida", isCorrect: false },
        { id: 3, text: "siddham scrpit", isCorrect: false },
      ],
    },
    {
      text: "how many languages  form satya yuga in india?",
      options: [
        { id: 0, text: "700", isCorrect: false },
        { id: 1, text: "19500", isCorrect: true },
        { id: 2, text: "450", isCorrect: true },
        { id: 3, text: "12000", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
    
      <h1>Alphbet quiz</h1>

    
      <h2>Points: {score}</h2>

  
      {showResults ? (
  
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
      
        <div className="question-card">
      
          <h2>
            Question : {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

         
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;