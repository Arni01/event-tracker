import { ImageURISource } from 'react-native';

export interface QuestHintModel {
  text: string;
  isVisible: boolean;
}

export interface QuestContentModel {
  text: string;
  imgUrl: ImageURISource;
}

export enum QuestType {
  FIRST_QUESTION = 'FIRST_QUESTION',
  SECOND_QUESTION = 'SECOND_QUESTION',
  THIRD_QUESTION = 'THIRD_QUESTION',
  FOURTH_QUESTION = 'FOURTH_QUESTION',
  FIFTH_QUESTION = 'FIFTH_QUESTION',
}

export interface QuestModel {
  id: QuestType;
  quest: QuestContentModel;
  hints: QuestHintModel[];
  isPassed: boolean;
}
