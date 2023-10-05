// Result.js
import React from 'react';

const Result = ({ score }) => {
  return (
    <div className="result-container">
      <h2>Quiz Result</h2>
      <p>Your Score: {score} / 2</p>
    </div>
  );
};

export default Result;
