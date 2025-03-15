'use client';
import { createContext, useContext } from 'react';

interface LangContextType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: { [key: string]: any };
}
const LangContext = createContext<LangContextType>({
  dict: {},
});

export const useLangContext = () => useContext(LangContext);

export const LangProvider = ({
  children,
  dict,
}: {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: { [key: string]: any };
}) => {
  return <LangContext.Provider value={{ dict }}>{children}</LangContext.Provider>;
};
