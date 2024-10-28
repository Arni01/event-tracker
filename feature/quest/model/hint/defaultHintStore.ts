import { HintModel, HintType } from './HintModel';

export const DefaultHintStore: HintModel[] = [
  {
    id: '1',
    question: {
      content: 'image',
      text: 'What is the meaning of life?',
    },
    answer: {
      type: HintType.CHOICE_ANSWER,
      options: ['42', '69'],
      correctOption: '42',
    },
  },
  {
    id: '2',
    question: {
      content: 'image',
      text: 'Question 2',
    },
    answer: {
      type: HintType.CHOICE_ANSWER,
      options: ['42', '69'],
      correctOption: '42',
    },
  },
  {
    id: '3',
    question: {
      content: 'image',
      text: 'Question 3',
    },
    answer: {
      type: HintType.CHOICE_ANSWER,
      options: ['42', '69'],
      correctOption: '42',
    },
  },
  {
    id: '4',
    question: {
      content: 'image',
      text: 'Question 4',
    },
    answer: {
      type: HintType.CHOICE_ANSWER,
      options: ['42', '69'],
      correctOption: '42',
    },
  },
  {
    id: '5',
    question: {
      content: 'image',
      text: 'Question 5',
    },
    answer: {
      type: HintType.CHOICE_ANSWER,
      options: ['42', '69'],
      correctOption: '42',
    },
  },
  {
    id: '6',
    question: {
      content: 'image',
      text: 'Question 6',
    },
    answer: {
      type: HintType.CHOICE_ANSWER,
      options: ['42', '69'],
      correctOption: '42',
    },
  },
  {
    id: '7',
    question: {
      content: 'image',
      text: 'Question 7',
    },
    answer: {
      type: HintType.CHOICE_ANSWER,
      options: ['42', '69'],
      correctOption: '42',
    },
  },
];
