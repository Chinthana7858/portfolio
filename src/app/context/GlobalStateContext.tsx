"use client";
import React, { createContext, useContext, useState, ReactNode, FC } from 'react';

// Define the shape of the context state
interface GlobalStateContextType {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create a context with default values
const GlobalStateContext = createContext<GlobalStateContextType | undefined>(undefined);

// Create a provider component
export const GlobalStateProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  return (
    <GlobalStateContext.Provider value={{ number, setNumber, dark, setDark }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Create a custom hook to use the global state
export const useGlobalState = (): GlobalStateContextType => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};
