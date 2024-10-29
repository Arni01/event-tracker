import { audio, images, video } from '@/constants';
import { HintMediaType, HintModel, HintType } from './hintModel';

export const DefaultHintStore: HintModel[] = [
  {
    id: '1',
    media: {
      type: HintMediaType.VIDEO,
      videoUri: video.test,
    },
    questionText: 'What is the meaning of life?',
    type: HintType.CHOICE_ANSWER,
    options: ['42', '69', '73', '8666666 drhdrh '],
    answer: '42',
  },
  {
    id: '2',
    media: {
      type: HintMediaType.AUDIO,
      audioUri: audio.test,
      posterUri: images.cards,
    },
    type: HintType.CHOICE_ANSWER,
    options: ['42', '69', '73', '8666666 drhdrh '],
    answer: '42',
  },
  {
    id: '3',
    media: {
      type: HintMediaType.IMAGE,
      imageUri: images.cards,
    },
    questionText: 'Question 3',
    type: HintType.CHOICE_ANSWER,
    options: ['42', '69'],
    answer: '42',
  },
  {
    id: '4',
    media: {
      type: HintMediaType.IMAGE,
      imageUri: images.cards,
    },
    questionText: 'Question 4',
    type: HintType.CHOICE_ANSWER,
    options: ['42', '69'],
    answer: '42',
  },
  {
    id: '5',
    media: {
      type: HintMediaType.IMAGE,
      imageUri: images.cards,
    },
    questionText: 'Question 5',
    type: HintType.CHOICE_ANSWER,
    options: ['42', '69'],
    answer: '42',
  },
  {
    id: '6',
    media: {
      type: HintMediaType.IMAGE,
      imageUri: images.cards,
    },
    questionText: 'Question 6',
    type: HintType.CHOICE_ANSWER,
    options: ['42', '69'],
    answer: '42',
  },
  {
    id: '7',
    media: {
      type: HintMediaType.IMAGE,
      imageUri: images.cards,
    },
    questionText: 'Question 7',
    type: HintType.CHOICE_ANSWER,
    options: ['42', '69'],
    answer: '42',
  },
];
