/* eslint-disable max-len */
import { FC } from 'react';

interface Props {
  timeLeft: number;
}

export const CountdownTimer: FC<Props>  = ({ timeLeft }) => {
  return (
    <h2 className="text-hunter font-semibold text-2xl text-center mt-20 mb-8">
      {timeLeft}
    </h2>
  );
};