import React, { createContext, ReactNode, useState } from 'react';

type AppContextProps = {
  children: ReactNode;
};

type AppContextType = {
  application: { start: boolean };
  setApplication: React.Dispatch<React.SetStateAction<{ start: boolean }>>;
};

const useMultiState = (initialState: any) => {
  const [state, setState] = useState(initialState);

  const setMultiState = (updatedState: { start: boolean }) => {
    setState((prevState: { start: boolean }) => ({
      ...prevState,
      ...updatedState,
    }));
  };

  return [state, setMultiState];
};

export const PContext = createContext<AppContextType>({
  application: {
    start: false,
  },
  setApplication: () => {},
});

export const AppContext = ({ children }: AppContextProps) => {
  const [application, setApplication] = useMultiState({
    start: true,
  });

  const contextValue = { application, setApplication };

  return <PContext.Provider value={contextValue}>{children}</PContext.Provider>;
};
