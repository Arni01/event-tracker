import images from '@/constants/images';
import { ImageURISource } from 'react-native';

export interface OnboardingModel {
  id: string;
  text: string;
  image: ImageURISource;
}

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
