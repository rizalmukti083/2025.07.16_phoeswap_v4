
import { FC, ReactNode } from 'react';
import { usePresale } from '../hooks/usePresale';

export const PresaleProvider: FC<{ children: ReactNode }> = ({ children }) => {
  usePresale();
  return <>{children}</>;
};
