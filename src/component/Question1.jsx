// Question1.js
import React, { useState } from 'react';

const Question1 = ({ onNextPage }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswerClick = (option) => {
    setSelectedOption(option);
  };

  const checkAnswer = () => {
    if (selectedOption === 'Green') {
      onNextPage(true);
    } else {
      onNextPage(false);
    }
  };

  return (
    <div className="question-container">
      <h2>Question 1</h2>
      <p>What is the colour of Leaf?</p>
      <ul>
        <li onClick={() => handleAnswerClick('Red')}>Red</li>
        <li onClick={() => handleAnswerClick('White')}>White</li>
        <li onClick={() => handleAnswerClick('Brown')}>Brown</li>
        <li onClick={() => handleAnswerClick('Green')}>Green</li>
      </ul>
      <button onClick={checkAnswer}>Next</button>
    </div>
  );
};

export default Question1;
