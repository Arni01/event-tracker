import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface OnboardingContextProps {
  isActiveOnboarding: boolean;
  closeOnboarding: () => void;
}
const OnboardingContext = createContext<OnboardingContextProps>({
  isActiveOnboarding: true,
  closeOnboarding: () => {},
});

export const useOnboardingContext = () => {
  const value = useContext(OnboardingContext);

  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error(
        'useGlobalContext must be wrapped in a <GlobalProvider />'
      );
    }
  }

  return value;
};

export const OnboardingProvider = ({ children }: PropsWithChildren) => {
  const [isActiveOnboarding, setIsActiveOnboarding] = useState(false);

  return (
    <OnboardingContext.Provider
      value={{
        isActiveOnboarding: isActiveOnboarding,
        closeOnboarding: () => {
          setIsActiveOnboarding(false);
        },
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};
