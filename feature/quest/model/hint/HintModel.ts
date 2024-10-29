import { AVPlaybackSource } from 'expo-av';
import { ImageURISource } from 'react-native';

export enum HintType {
  CHOICE_ANSWER = 'CHOICE_ANSWER',
  TYPE_ANSWER = 'TYPE_ANSWER',
}

export enum HintMediaType {
  VIDEO = 'VIDEO',
  AUDIO = 'AUDIO',
  IMAGE = 'IMAGE',
}

export interface HintVideoModel {
  type: HintMediaType.VIDEO;
  videoUri: AVPlaybackSource;
}
export interface HintAudioModel {
  type: HintMediaType.AUDIO;
  audioUri: AVPlaybackSource;
  posterUri?: ImageURISource;
}
export interface HintImageModel {
  type: HintMediaType.IMAGE;
  imageUri: ImageURISource;
}

interface ChoiceAnswerModel {
  type: HintType.CHOICE_ANSWER;
  options: string[];
  answer: string;
}

interface TypeAnswerModel {
  type: HintType.TYPE_ANSWER;
  answer: string;
}

export type HintModel = {
  id: string;
  media: HintVideoModel | HintAudioModel | HintImageModel;
  questionText?: string;
} & (ChoiceAnswerModel | TypeAnswerModel);
