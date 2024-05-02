import { FC } from 'react';
import { Caret } from '../Caret';
import { Character } from '../Character/Character';

interface Props {
  userInput: string;
  className: string;
  words: string;
}

export const UserTypings: FC<Props> = ({ userInput, className, words }) => {
  const typedCharacters = userInput.split('');

  return (
    <div className={className}>
      {typedCharacters.map((char, index) => (
        <Character
          key={`${char}_${index}`}
          actual={char}
          expected={words[index]}
        />
      ))}
      <Caret />
    </div>
  );
};
