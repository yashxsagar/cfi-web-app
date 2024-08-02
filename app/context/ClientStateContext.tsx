"use client";
import { createContext, ReactNode, useContext, useState } from "react";

const ClientStateContext = createContext({
  logging: false,
  setLogging: (flag: boolean) => {},
});

// Export the hook for using this context
export const useClientContext = () => useContext(ClientStateContext);

interface ProviderProps {
  children: ReactNode;
}
export function ClientStateContextProvider({ children }: ProviderProps) {
  const [logging, setLogging] = useState(false);

  return (
    <ClientStateContext.Provider value={{ logging, setLogging }}>
      {children}
    </ClientStateContext.Provider>
  );
}
