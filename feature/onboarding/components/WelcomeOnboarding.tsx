import { FC } from 'react';
import { AnimatedList, ThemedSafeAreaView } from '@/shared/component';
import { WelcomeOnboardingData } from '../model/welcomeOnboardingData';

interface WelcomeOnboardingProps {
  onPress: () => void;
}

export const WelcomeOnboarding: FC<WelcomeOnboardingProps> = ({ onPress }) => {
  return (
    <ThemedSafeAreaView>
      <AnimatedList
        data={WelcomeOnboardingData}
        onPress={onPress}
      ></AnimatedList>
    </ThemedSafeAreaView>
  );
};
