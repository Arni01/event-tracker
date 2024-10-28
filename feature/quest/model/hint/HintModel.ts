export enum HintType {
  CHOICE_ANSWER = 'CHOICE_ANSWER',
  TYPE_ANSWER = 'TYPE_ANSWER',
}

type Video = 'video';
type Audio = 'audio';
type Image = 'image';

type ChoiceAnswerModel = {
  type: HintType.CHOICE_ANSWER;
  options: string[];
  correctOption: string;
};

type TypeAnswerModel = {
  type: HintType.TYPE_ANSWER;
  answer: string;
};

export interface HintModel {
  id: string;
  question: {
    content: Video | Audio | Image;
    text: string;
  };
  answer: TypeAnswerModel | ChoiceAnswerModel;
}
