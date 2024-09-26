import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface GlobalContextProps {
  isLogged: boolean;
}

const GlobalContext = createContext<GlobalContextProps>({ isLogged: false });
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }: PropsWithChildren) => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
