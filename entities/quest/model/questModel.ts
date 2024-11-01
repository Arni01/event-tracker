import { ImageURISource } from 'react-native';

export interface QuestHintModel {
  text: string;
  isVisible: boolean;
}

export interface QuestContentModel {
  text: string;
  imgUrl: ImageURISource;
}

export enum QuestId {
  FIRST_QUESTION = 'FIRST_QUESTION',
  SECOND_QUESTION = 'SECOND_QUESTION',
  THIRD_QUESTION = 'THIRD_QUESTION',
  FOURTH_QUESTION = 'FOURTH_QUESTION',
  FINAL_QUESTION = 'FINAL_QUESTION',
}

export interface QuestModel {
  id: QuestId;
  quest: QuestContentModel;
  hints: QuestHintModel[];
  answer: string;
  isPassed: boolean;
}
