import { images } from '@/constants';
import { OnboardingModel } from '@/entities/onboarding';

export const WelcomeOnboardingData: OnboardingModel[] = [
  {
    id: '1',
    text: [
      '🌟 Welcome to Quest! 🌟',
      '🐾 Meet Little Puff, your chubby orange cat companion! 🐾',
    ],
    image: images.onboarding.welcomeCat,
  },
  {
    id: '2',
    text: ['Add text'],
    image: images.onboarding.spaceCat,
  },
];
