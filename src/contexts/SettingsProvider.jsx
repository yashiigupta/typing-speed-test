import { createContext, useState } from "react";

export const SettingsContext = createContext(null);

export const SettingsProvider = ({ children }) => {

  const [difficulty, setDifficulty] = useState('Hard');
  const [mode, setMode] = useState('Passage');

  return (
    <SettingsContext.Provider
      value = {{
        difficulty,
        setDifficulty,
        mode,
        setMode
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}