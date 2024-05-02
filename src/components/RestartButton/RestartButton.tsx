/* eslint-disable import/no-extraneous-dependencies */
import { FC, useRef } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';

interface Props {
  onRestart: () => void;
  clName: string
}

export const RestartButton: FC<Props> = ({ onRestart, clName = '' }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    buttonRef.current?.blur();
    onRestart();
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`block rounded px-8 py-2 hover:bg-slate-700/50 ${clName}`}
    >
      <RefreshIcon className="w-6 h-6" />
    </button>
  );
};