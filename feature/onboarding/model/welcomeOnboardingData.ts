import { images } from '@/constants';
import { OnboardingModel } from '@/entities/onboarding';

export const WelcomeOnboardingData: OnboardingModel[] = [
  {
    id: '1',
    text: [
      '🌟 Welcome to Quest! 🌟',
      '🐾 Meet Little Puff, your chubby orange cat companion! 🐾',
      'I’m your furry guide on this pawsome adventure!',
    ],
    image: images.onboarding.welcomeCat,
  },
  {
    id: '2',
    text: [
      'Today, we’ll embark on a fun-filled journey full of challenges and surprises to make your special day unforgettable.',
    ],
    image: images.onboarding.welcomeCat,
  },
  {
    id: '3',
    text: [
      'Meow! If you find yourself stuck on your quest, don’t worry!',
      "Just tap the jelly lamp icon up in the corner, solve funny puzzles to earn a hint. It's like magic!✨",
    ],
    image: images.onboarding.welcomeCat,
  },
  {
    id: '4',
    text: [
      'Are you excited? Let’s make this birthday a meow-nificent one together! 🥳🐱',
    ],
    image: images.onboarding.welcomeCat,
  },
];
