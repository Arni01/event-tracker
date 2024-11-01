import { audio, images, video } from '@/constants';
import { HintMediaType, HintModel, HintType } from './hintModel';

export const DefaultHintStore: HintModel[] = [
  {
    id: '1',
    media: {
      type: HintMediaType.VIDEO,
      videoUri: video.trafficLite,
    },
    questionText: 'What is the name of the song?',
    type: HintType.CHOICE_ANSWER,
    options: [
      'Green light',
      'Everyone is running',
      'Green traffic light',
      'Rush hour',
    ],
    answer: 'Green light',
  },
  {
    id: '2',
    media: {
      type: HintMediaType.AUDIO,
      audioUri: audio.nastenka,
      posterUri: images.hints.stroller,
    },
    questionText: 'What is the name of the song?',
    type: HintType.CHOICE_ANSWER,
    options: [
      'A curly-haired boy',
      'Fly',
      'Nastenka',
      'An Incident by the stroller',
    ],
    answer: 'Nastenka',
  },
  {
    id: '3',
    media: {
      type: HintMediaType.AUDIO,
      audioUri: audio.aboutCar,
      posterUri: images.hints.car,
    },
    questionText: 'What is the name of the song?',
    type: HintType.CHOICE_ANSWER,
    options: ['About the girl', 'The doctor Peter', 'Marina', 'About the car'],
    answer: 'About the car',
  },
  {
    id: '4',
    media: {
      type: HintMediaType.AUDIO,
      audioUri: audio.iWantSo,
      posterUri: images.hints.sea,
    },
    questionText: 'What is the name of the song?',
    type: HintType.CHOICE_ANSWER,
    options: ['Sea', 'I want so...', 'The cry of the soul', 'Longing'],
    answer: 'I want so...',
  },
  {
    id: '5',
    media: {
      type: HintMediaType.AUDIO,
      audioUri: audio.blueTractor,
      posterUri: images.hints.blueTractor,
    },
    questionText: 'What is the name of the song?',
    type: HintType.CHOICE_ANSWER,
    options: [
      'The Caw',
      'The Field',
      'The blue tractor',
      'Singing in the Fields',
    ],
    answer: 'The blue tractor',
  },
  {
    id: '6',
    media: {
      type: HintMediaType.AUDIO,
      audioUri: audio.lostAndFound,
      posterUri: images.hints.carInTheDream,
    },
    questionText: 'What is the name of the song?',
    type: HintType.CHOICE_ANSWER,
    options: [
      'Lost and Found',
      'The Field',
      'The Joy of Finding',
      "Don't Lose Your Kindness",
    ],
    answer: 'Lost and Found',
  },
  {
    id: '7',
    media: {
      type: HintMediaType.AUDIO,
      audioUri: audio.giveThatWolfABanana,
      posterUri: images.hints.wolf,
    },
    questionText: 'What is the name of the song?',
    type: HintType.CHOICE_ANSWER,
    options: ['Wolf', 'Yum-yum-yum', 'A banana', 'Give that wolf a banana'],
    answer: 'Give that wolf a banana',
  },
  {
    id: '8',
    media: {
      type: HintMediaType.AUDIO,
      audioUri: audio.noOneWritesToTheColonel,
      posterUri: images.hints.railwayStation,
    },
    questionText: 'What is the name of the song?',
    type: HintType.CHOICE_ANSWER,
    options: [
      'Railway station',
      'Big cities',
      'No one writes to the colonel',
      'The colonel',
    ],
    answer: 'No one writes to the colonel',
  },
  {
    id: '9',
    media: {
      type: HintMediaType.IMAGE,
      imageUri: images.hints.titanic,
    },
    questionText: 'What is the movie?',
    type: HintType.CHOICE_ANSWER,
    options: ['The cat on the ship', 'Titanic', 'Captain', 'Matroskin'],
    answer: 'Titanic',
  },
  {
    id: '10',
    media: {
      type: HintMediaType.IMAGE,
      imageUri: images.hints.catAmerica,
    },
    questionText: 'Who is that?',
    type: HintType.CHOICE_ANSWER,
    options: ['A Cat', 'Homelander', 'Captain America', 'America'],
    answer: 'Captain America',
  },
  {
    id: '11',
    media: {
      type: HintMediaType.IMAGE,
      imageUri: images.hints.cajon,
    },
    questionText: 'What does the cat play?',
    type: HintType.CHOICE_ANSWER,
    options: ["He can't play", 'Scratching post', 'Wood', 'Cajon'],
    answer: 'Cajon',
  },
  {
    id: '12',
    media: {
      type: HintMediaType.AUDIO,
      audioUri: audio.dontDie,
      posterUri: images.hints.flowers,
    },
    questionText: 'What is the name of the song?',
    type: HintType.CHOICE_ANSWER,
    options: ['Flowers', 'Overcast Paradise', 'Glimmers of Tears', "Don't die"],
    answer: "Don't die",
  },
];
