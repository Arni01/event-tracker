import { HintModel, HintType } from './HintModel';

export const DefaultHintStore: HintModel[] = [
  {
    id: '1',
    content: {
      media: 'image',
      questionText: 'What is the meaning of life?',
    },
    answer: {
      type: HintType.CHOICE_ANSWER,
      options: ['42', '69'],
      correctOption: '42',
    },
  },
  {
    id: '2',
    content: {
      media: 'image',
      questionText: 'Question 2',
    },
    answer: {
      type: HintType.CHOICE_ANSWER,
      options: ['42', '69'],
      correctOption: '42',
    },
  },
  {
    id: '3',
    content: {
      media: 'image',
      questionText: 'Question 3',
    },
    answer: {
      type: HintType.CHOICE_ANSWER,
      options: ['42', '69'],
      correctOption: '42',
    },
  },
  {
    id: '4',
    content: {
      media: 'image',
      questionText: 'Question 4',
    },
    answer: {
      type: HintType.CHOICE_ANSWER,
      options: ['42', '69'],
      correctOption: '42',
    },
  },
  {
    id: '5',
    content: {
      media: 'image',
      questionText: 'Question 5',
    },
    answer: {
      type: HintType.CHOICE_ANSWER,
      options: ['42', '69'],
      correctOption: '42',
    },
  },
  {
    id: '6',
    content: {
      media: 'image',
      questionText: 'Question 6',
    },
    answer: {
      type: HintType.CHOICE_ANSWER,
      options: ['42', '69'],
      correctOption: '42',
    },
  },
  {
    id: '7',
    content: {
      media: 'image',
      questionText: 'Question 7',
    },
    answer: {
      type: HintType.CHOICE_ANSWER,
      options: ['42', '69'],
      correctOption: '42',
    },
  },
];
