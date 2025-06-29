import React, { useEffect, useState } from 'react';
import './Sec.css';
import Contact from './Contact';
import Navbar from './Navbar';

const sentence = `It was a quiet morning when Mia found an old key hidden beneath the floorboard of her grandfather’s attic. Dust clung to its surface, and it shimmered faintly in the sunlight. Curious, she searched the room until she spotted a small wooden chest tucked behind forgotten books. Her hands trembled slightly as she turned the key and lifted the lid. Inside were faded letters, photographs, and a pocket watch that still ticked. Each item seemed to whisper stories of the past, of love and war, of hope and heartbreak. Mia sat cross-legged on the floor, completely absorbed. She had stumbled upon a hidden piece of her family’s history, and with it, a mystery she couldn’t wait to solve.`;

const chunkSize = 10;

const Sec = () => {
  const [input, setInput] = useState('');
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [chunkIndex, setChunkIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [typoCount, setTypoCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [allTypedWords, setAllTypedWords] = useState([]);

  const words = sentence.split(' ');
  const chunks = [];

  for (let i = 0; i < words.length; i += chunkSize) {
    chunks.push(words.slice(i, i + chunkSize));
  }

  const currentChunk = chunks[chunkIndex] || [];

  useEffect(() => {
    if (started && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && started) {
      calculateResults();
      setFinished(true);
    }
  }, [started, timeLeft]);

  const calculateResults = () => {
    const allWords = chunks.slice(0, chunkIndex + 1).flat();
    const finalTypedWords = [...allTypedWords, ...input.trim().split(' ')];

    let correct = 0;
    let typos = 0;

    finalTypedWords.forEach((word, i) => {
      if (word === allWords[i]) {
        correct++;
      } else {
        typos++;
      }
    });

    setCorrectCount(correct);
    setTypoCount(typos);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (!started) setStarted(true);
    setInput(value);

    const typedWords = value.trim().split(' ');
    const lastChar = value.slice(-1);

    if (
      lastChar === ' ' &&
      typedWords.length === currentChunk.length &&
      typedWords.every(w => w.length > 0)
    ) {
      setAllTypedWords(prev => [...prev, ...typedWords]);
      setChunkIndex(prev => prev + 1);
      setInput('');
    }
  };

  return (
    <div className='Nothing'>
      <Navbar />
      <div className="typing-container">
        <h2>Typing Test – 1 Minute</h2>
        <p className="timer">Time Left: {timeLeft}s</p>

        {!finished ? (
          <>
            <div className="sentence">
              {currentChunk.map((word, idx) => {
                const typedWord = input.trim().split(' ')[idx] || '';
                let className = '';
                if (typedWord) {
                  className = typedWord === word ? 'correct' : 'incorrect';
                }
                return <span key={idx} className={className}>{word} </span>;
              })}
            </div>

            <textarea
              placeholder="Start typing here..."
              value={input}
              onChange={handleChange}
              disabled={timeLeft === 0}
            />
          </>
        ) : (
          <div className="results">
            <h3>Results</h3>
            <p>WPM: {Math.round(correctCount)}</p>
            <p>Correct Words: {correctCount - typoCount}</p>
            <p>Typos: {typoCount}</p>
          </div>
        )}
      </div>
      <Contact />
    </div>
  );
};

export default Sec;