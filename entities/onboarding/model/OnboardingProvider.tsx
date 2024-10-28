import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface OnboardingContextProps {
  isPassedOnboarding: boolean;
  closeOnboarding: () => void;
}
const OnboardingContext = createContext<OnboardingContextProps | null>(null);

export const useOnboardingContext = () => {
  const value = useContext(OnboardingContext);

  if (!value) {
    throw new Error(
      'useOnboardingContext must be wrapped in a <OnboardingProvider />'
    );
  }

  return value;
};

export const OnboardingProvider = ({ children }: PropsWithChildren) => {
  const [isPassedOnboarding, setIsActiveOnboarding] = useState(true);

  return (
    <OnboardingContext.Provider
      value={{
        isPassedOnboarding,
        closeOnboarding: () => {
          setIsActiveOnboarding(true);
        },
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};
