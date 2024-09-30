import { FC } from 'react';
import { DataModel } from './DataModel';
import images from '@/constants/images';
import { OnboardingComponent } from '@/components/onboarding';
import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView';

const data: DataModel[] = [
  {
    id: '1',
    text: 'Trusted by millions of people, part of one part',
    image: images.cards,
  },
  {
    id: '2',
    text: 'Spend money abroad, and track your expense',
    image: images.cards,
  },
  {
    id: '3',
    text: 'Receive Money From Anywhere In The World',
    image: images.cards,
  },
];

interface AppOnboardingProps {
  onPress: () => void;
}

export const AppOnboarding: FC<AppOnboardingProps> = ({ onPress }) => {
  return (
    <ThemedSafeAreaView>
      <OnboardingComponent data={data} onPress={onPress}></OnboardingComponent>
    </ThemedSafeAreaView>
  );
};
