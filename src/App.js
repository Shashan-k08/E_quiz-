// App.js
import React, { useState } from 'react';
import './App.css';
import Question1 from './component/Question1';
import Question2 from './component/Question2';
import Result from './component/Result';

function App() {
  const [page, setPage] = useState(1);
  const [score, setScore] = useState(0);

  const handleNextPage = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1); // Increment the score if the answer is correct
    }

    // Move to the next question or display the result
    if (page === 1) {
      setPage(2);
    } else {
      setPage(3);
    }
  };

  return (
    <div className="App">
      {page === 1 && <Question1 onNextPage={handleNextPage} />}
      {page === 2 && <Question2 onNextPage={handleNextPage} />}
      {page === 3 && <Result score={score} />}
    </div>
  );
}

export default App;
