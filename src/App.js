import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AboveGame from './components/AboveGame';
import Game from './components/Game';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [scroe, setScore] = useState(0);
  const [bestScore, setBestScroe] = useLocalStorage('bestScore', 0);

  useEffect(() => {
    if (scroe > bestScore) {
      setBestScroe(scroe);
    }
  });

  return (
    <div className="container">
      <Header scroe={scroe} bestScore={bestScore} />
      <AboveGame />
      <Game setScore={setScore} />
    </div>
  );
}

export default App;
