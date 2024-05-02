/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { Header } from './components/Header';
import { Words } from './components/Words';
import { CountdownTimer } from './components/CountdownTimer';
import { RestartButton } from './components/RestartButton';
import { Result } from './components/Result';
import { UserTypings } from './components/UserTypings';
import { useEngine } from './hooks/useEngine';
import { calculateAccuracyPercentage } from './utils/helpers';
import { WordsContainer } from './components/WordsContainer';
import cn from 'classnames';


const timeArr = [15, 30, 60];

export const App = () => {
  const [time, setTime] = useState<number>(30);

  const wordsAmount = time * 2;

  const { state, words, timeLeft, typed, errors, restart, totalTyped } = useEngine(wordsAmount, time);

  return (
    <>
      <div>
        <Header />

        <div className="flex justify-between items-center px-48 h-12 mb-8">
          <CountdownTimer
            timeLeft={timeLeft}
          />

          <div className="flex ml-48 mt-12 w-48 justify-around border-fern border-2 rounded-2xl">

            {timeArr.map(t => (
              <button
                className={cn('box-border rounded-xl h-8 grow text-lg text-brunswick',
                  'font-semibold hover:text-sage transition duration-300', {
                    'bg-fern text-timberwolf hover:text-slate-200': t === time,
                  })}
                key={t}
                onClick={() => {
                  if (t !== time) {
                    setTime(t);
                    restart();
                  }
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>


        <WordsContainer>
          <Words words={words} />
          <UserTypings
            className="absolute inset-0 pb-0 p-48 pt-0"
            userInput={typed}
            words={words}
          />
        </WordsContainer>
        <RestartButton 
          clName="mx-auto mt-1 text-slate-500"
          onRestart={restart}
        />
      </div>

      <Result 
        className="m-auto"
        state={state}
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
        time={time}
        onRestart={restart}
      />
    </>
  );
};