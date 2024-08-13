'use client';

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  className = '',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-amber-400 text-white py-2 px-4 rounded-lg transition hover:bg-amber-500 ${disabled && 'bg-amber-200'} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
