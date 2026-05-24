"use client";
import React, { createContext, useContext, useState, ReactNode, FC } from "react";

interface GlobalStateContextType {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalStateContext = createContext<GlobalStateContextType | undefined>(
  undefined
);

export const GlobalStateProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [dark, setDark] = useState(true);

  return (
    <GlobalStateContext.Provider value={{ dark, setDark }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = (): GlobalStateContextType => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};
