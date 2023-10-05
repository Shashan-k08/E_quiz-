
import React, { useState } from 'react';

const Question2 = ({ onNextPage }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const handleAnswerChange = (option) => {
    setSelectedOption(option);
  };

  const moveToNextQuestion = () => {
    onNextPage(true);
  };
  const checkAnswer = () => {
    if (selectedOption === 'BJP') {
      onNextPage(true); 
    } else {
      setShowCorrectAnswer(true); 
    }
  };

  return (
    <div className="question-container">
      <h2>Question 2</h2>
      <p>Among these which one is the largest Political Party in India?</p>
      <form>
        <label>
          <input
            type="radio"
            value="BJP"
            checked={selectedOption === 'BJP'}
            onChange={() => handleAnswerChange('BJP')}
            disabled={showCorrectAnswer}
          />
          BJP
        </label>
        <label>
          <input
            type="radio"
            value="BSP"
            checked={selectedOption === 'BSP'}
            onChange={() => handleAnswerChange('BSP')}
            disabled={showCorrectAnswer}
          />
          BSP
        </label>
        <label>
          <input
            type="radio"
            value="AAP"
            checked={selectedOption === 'AAP'}
            onChange={() => handleAnswerChange('AAP')}
            disabled={showCorrectAnswer}
          />
          AAP
        </label>
        <label>
          <input
            type="radio"
            value="SP"
            checked={selectedOption === 'SP'}
            onChange={() => handleAnswerChange('SP')}
            disabled={showCorrectAnswer}
          />
          SP
        </label>
      </form>
      {showCorrectAnswer && <p> Correct answer :<h7> BJP</h7></p>}
      <button onClick={checkAnswer} disabled={showCorrectAnswer}>
        {showCorrectAnswer ? 'Next' : 'Submit'}
      </button>
    </div>
  );
};

export default Question2;
