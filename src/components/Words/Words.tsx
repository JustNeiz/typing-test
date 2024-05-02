import { FC } from 'react';

interface Props {
  words: string;
}

export const Words: FC<Props> = ({ words }) => {
  return (
    <div className=" text-slate-500">
      {words}
    </div>
  );
};

