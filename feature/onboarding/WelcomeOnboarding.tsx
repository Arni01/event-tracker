import { FC } from 'react';
import { WelcomeOnboardingData } from '@/entities/onboarding';
import { OnboardingList, ThemedSafeAreaView } from '@/shared/component';

interface AppOnboardingProps {
  onPress: () => void;
}

export const WelcomeOnboarding: FC<AppOnboardingProps> = ({ onPress }) => {
  return (
    <ThemedSafeAreaView>
      <OnboardingList
        data={WelcomeOnboardingData}
        onPress={onPress}
      ></OnboardingList>
    </ThemedSafeAreaView>
  );
};
