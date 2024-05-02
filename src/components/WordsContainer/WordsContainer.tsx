/* eslint-disable max-len */
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const WordsContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative text-2xl max-x-xl leading-relaxed break-all mt-3 p-48 pb-12 pt-0">
      {children}
    </div>
  );
};
