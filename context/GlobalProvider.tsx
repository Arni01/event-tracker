import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface GlobalContextProps {
  isActiveOnboarding: boolean;
  closeOnboarding: () => void;
}
const GlobalContext = createContext<GlobalContextProps>({
  isActiveOnboarding: true,
  closeOnboarding: () => {},
});

export const useGlobalContext = () => {
  const value = useContext(GlobalContext);

  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error(
        'useGlobalContext must be wrapped in a <GlobalProvider />'
      );
    }
  }

  return value;
};

const GlobalProvider = ({ children }: PropsWithChildren) => {
  const [isActiveOnboarding, setIsActiveOnboarding] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        isActiveOnboarding: isActiveOnboarding,
        closeOnboarding: () => {
          setIsActiveOnboarding(false);
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
