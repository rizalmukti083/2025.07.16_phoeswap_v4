
<<<<<<< HEAD
import { FC, ReactNode } from 'react';
=======
import React, { FC, ReactNode } from 'react';
>>>>>>> 2159ef1c79b15ebe65f713f30fc425982661d7c2
import { usePresale } from '../hooks/usePresale';

export const PresaleProvider: FC<{ children: ReactNode }> = ({ children }) => {
  usePresale();
  return <>{children}</>;
};
