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
  correctType: string;
};

export interface HintModel {
  id: string;
  content: {
    media: Video | Audio | Image;
    questionText: string;
  };
  answer: TypeAnswerModel | ChoiceAnswerModel;
}
