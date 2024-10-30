import { FC } from 'react';
import { AnimatedList, ThemedSafeAreaView } from '@/shared/component';
import { WelcomeOnboardingData } from '../model/welcomeModel';

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
