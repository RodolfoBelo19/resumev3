import { useState, useEffect } from 'react';

const words = ["Fullstack Developer"];
const typingSpeed = 100;
const wordDelay = 2000; 

const LoopingTypingEffect = ({classProp}: any) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');

  useEffect(() => {
    let interval: any;
    let timeout: any;

    const typeNextWord = () => {
      const word = words[currentWordIndex];

      setCurrentWord(word.substring(0, currentWord.length + 1));

      if (currentWord === word) {
        clearInterval(interval);
        timeout = setTimeout(() => {
          setCurrentWord('');
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, wordDelay);
      }
    };

    interval = setInterval(typeNextWord, typingSpeed);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [currentWord, currentWordIndex]);

  return <div className={classProp}>{currentWord}</div>;
};

export default LoopingTypingEffect;
