/* eslint-disable no-console */
import { useState, useCallback, useEffect } from 'react';
import { useCountdownTimer } from './useCountdownTimer';
import { useWords } from './useWords';
import { useTypings } from './useTypings';
import { countErrors } from '../utils/helpers';

export type State = 'start' | 'run' | 'finish';

export const useEngine = (wordsNumber: number, secondsNumber: number) => {
  const [state, setState] = useState<State>('start');
  const { words, updateWords } = useWords(wordsNumber);
  const { timeLeft, startCountdown, resetCountdown }
    = useCountdownTimer(secondsNumber);
  const { typed, cursor, clearTyped, resetTotalTyped, totalTyped }
    = useTypings(state !== 'finish');
  const [errors, setErrors] = useState(0);

  const isStarting = state === 'start' && cursor > 0;
  const areWordsFinished = cursor === words.length;

  const sumErrors = useCallback(() => {
    const wordsReached = words.substring(0, cursor);

    setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached));
  }, [typed, words, cursor]);

  useEffect(() => {
    if (isStarting) {
      setState('run');
      startCountdown();
    }
  }, [isStarting, startCountdown, cursor]);

  useEffect(() => {
    if (!timeLeft) {
      console.log('time is up...');

      setState('finish');
      sumErrors();
    }
  }, [timeLeft, sumErrors]);

  useEffect(() => {
    if (areWordsFinished) {
      console.log('words are finished...');

      sumErrors();
      updateWords();
      clearTyped();
    }
  }, [
    cursor,
    words,
    clearTyped,
    typed,
    areWordsFinished,
    updateWords,
    sumErrors,
  ]);

  const restart = useCallback(() => {
    console.log('restarting...');

    resetCountdown();
    resetTotalTyped();
    setState('start');
    setErrors(0);
    updateWords();
    clearTyped();
  }, [clearTyped, updateWords, resetCountdown, resetTotalTyped]);

  return { state, words, timeLeft, typed, errors, totalTyped, restart };
};