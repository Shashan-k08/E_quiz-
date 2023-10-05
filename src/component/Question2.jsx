// Question2.js
import React, { useState } from 'react';

const Question2 = ({ onNextPage }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswerClick = (option) => {
    setSelectedOption(option);
  };

  const checkAnswer = () => {
    if (selectedOption === 'BJP') {
      onNextPage(true);
    } else {
      onNextPage(false);
    }
  };

  return (
    <div className="question-container">
      <h2>Question 2</h2>
      <p>Among these which one is the largest Political Party in India?</p>
      <ul>
        <li onClick={() => handleAnswerClick('BJP')}>BJP</li>
        <li onClick={() => handleAnswerClick('BSP')}>BSP</li>
        <li onClick={() => handleAnswerClick('AAP')}>AAP</li>
        <li onClick={() => handleAnswerClick('SP')}>SP</li>
      </ul>
      <button onClick={checkAnswer}>Next</button>
    </div>
  );
};

export default Question2;
