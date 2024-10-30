import { images } from '@/constants';
import { OnboardingModel } from '@/entities/onboarding';

export const WelcomeOnboardingData: OnboardingModel[] = [
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
