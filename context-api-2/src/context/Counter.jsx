import { createContext, useState } from "react";

export const CounterContext = createContext("Ashish");

export const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};
