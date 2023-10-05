// Question1.js
import React, { useState } from 'react';

const Question1 = ({ onNextPage }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const handleAnswerChange = (option) => {
    setSelectedOption(option);
  };

  const moveToNextQuestion = () => {
    onNextPage(true); // Move to the next question
  };

  const checkAnswer = () => {
    if (selectedOption === 'Green') {
      onNextPage(true); // Move to the next question if the answer is correct
    } else {
      setShowCorrectAnswer(true); // Display the correct answer
    }
  };

  return (
    <div className="question-container">
      <h2>Question 1</h2>
      <p>What is the colour of Leaf?</p>
      <form>
        <label>
          <input
            type="radio"
            value="Red"
            checked={selectedOption === 'Red'}
            onChange={() => handleAnswerChange('Red')}
            disabled={showCorrectAnswer}
          />
          Red
        </label>
        <label>
          <input
            type="radio"
            value="White"
            checked={selectedOption === 'White'}
            onChange={() => handleAnswerChange('White')}
            disabled={showCorrectAnswer}
          />
          White
        </label>
        <label>
          <input
            type="radio"
            value="Brown"
            checked={selectedOption === 'Brown'}
            onChange={() => handleAnswerChange('Brown')}
            disabled={showCorrectAnswer}
          />
          Brown
        </label>
        <label>
          <input
            type="radio"
            value="Green"
            checked={selectedOption === 'Green'}
            onChange={() => handleAnswerChange('Green')}
            disabled={showCorrectAnswer}
          />
          Green
        </label>
      </form>
      {showCorrectAnswer && <p>Correct answer :<h7>Green</h7> </p>}
     <button onClick={checkAnswer} disabled={showCorrectAnswer}>
        {showCorrectAnswer ? 'Next' : 'Submit'}
      </button>
      
    </div>
  );
};

export default Question1;
