/* eslint-disable import/no-extraneous-dependencies */
import { FC } from 'react';
import cn from 'classnames';

interface Props {
  actual: string;
  expected: string;
}

export const Character: FC<Props> = ({ actual, expected }) => {
  const isCorrect = actual === expected;
  const isWhiteSpace = expected === ' ';

  return (
    <span
      className={cn({
        'text-red-500': !isCorrect && !isWhiteSpace,
        'text-black-400': isCorrect && !isWhiteSpace,
        'bg-red-500/50': !isCorrect && isWhiteSpace,
      })}
    >
      {expected}
    </span>
  );
};
