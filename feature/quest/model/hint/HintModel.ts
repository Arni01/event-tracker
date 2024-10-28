export enum HintType {
  CHOICE_ANSWER = 'CHOICE_ANSWER',
  TYPE_ANSWER = 'TYPE_ANSWER',
}

type Video = 'video';
type Audio = 'audio';
type Image = 'image';

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
  media: Video | Audio | Image;
  questionText?: string;
} & (ChoiceAnswerModel | TypeAnswerModel);
