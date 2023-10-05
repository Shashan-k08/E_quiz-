// App.js
import React, { useState } from 'react';
import './App.css';
import Question1 from './component/Question1';
import Question2 from './component/Question2';
import Result from './component/Result';

function App() {
  const [page, setPage] = useState(1); // Start with the first question
  const [score, setScore] = useState(0);

  const handleNextPage = (isCorrect) => {
    if (page === 1 && isCorrect) {
      // Move to the second question if the first question is answered correctly
      setPage(2);
    } else {
      setScore(isCorrect ? 1 : 0);
      setPage(3); // Display result page
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
