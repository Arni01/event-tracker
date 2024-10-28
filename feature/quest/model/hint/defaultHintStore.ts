import { HintModel, HintType } from './hintModel';

export const DefaultHintStore: HintModel[] = [
  {
    id: '1',
    media: 'image',
    questionText: 'What is the meaning of life?',
    type: HintType.CHOICE_ANSWER,
    options: ['42', '69'],
    answer: '42',
  },
  {
    id: '2',
    media: 'image',
    type: HintType.CHOICE_ANSWER,
    options: ['42', '69', '73', '8666666 drhdrh '],
    answer: '42',
  },
  {
    id: '3',
    media: 'image',
    questionText: 'Question 3',
    type: HintType.CHOICE_ANSWER,
    options: ['42', '69'],
    answer: '42',
  },
  {
    id: '4',
    media: 'image',
    questionText: 'Question 4',
    type: HintType.CHOICE_ANSWER,
    options: ['42', '69'],
    answer: '42',
  },
  {
    id: '5',
    media: 'image',
    questionText: 'Question 5',
    type: HintType.CHOICE_ANSWER,
    options: ['42', '69'],
    answer: '42',
  },
  {
    id: '6',
    media: 'image',
    questionText: 'Question 6',
    type: HintType.CHOICE_ANSWER,
    options: ['42', '69'],
    answer: '42',
  },
  {
    id: '7',
    media: 'image',
    questionText: 'Question 7',
    type: HintType.CHOICE_ANSWER,
    options: ['42', '69'],
    answer: '42',
  },
];
