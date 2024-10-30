import images from '@/constants/images';
import { ImageURISource } from 'react-native';

export interface OnboardingModel {
  id: string;
  text: string;
  image: ImageURISource;
}
