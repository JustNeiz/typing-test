/* eslint-disable import/no-extraneous-dependencies */
import { useState, useCallback, useEffect } from 'react';
import { generate } from 'random-words';

const generateWords = (count: number) => {
  return generate({ exactly: count, join: ' ' });
};

export const useWords = (count: number) => {
  const [words, setWords] = useState<string>(generateWords(count));

  useEffect(() => {
    setWords(generateWords(count));
  }, [count]);

  const updateWords = useCallback(() => {
    setWords(generateWords(count));
  }, [count]);

  return { words, updateWords };
};