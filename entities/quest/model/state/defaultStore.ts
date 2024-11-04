import { images } from '@/constants';
import { QuestModel, QuestId } from '../questModel';

export const DefaultQuestStore: QuestModel[] = [
  {
    id: QuestId.FIRST_QUESTION,
    hints: [
      {
        text: 'Time and heat blend there',
        isVisible: false,
      },
      {
        text: 'Transforming raw to tasty, I thrive',
        isVisible: false,
      },
      {
        text: 'With a door that swings and warmth inside',
        isVisible: false,
      },
    ],
    quest: {
      imgUrl: images.question.thinkingCat,
      text: 'I hold potential, hidden but clear. In silence I wait, to bring forth delight. What am I, where change begins to appear?',
    },
    answer: 'THE_ANSWER_OF_THE_QUESTION_IN_THE_OVEN',
    isPassed: false,
  },
  {
    id: QuestId.SECOND_QUESTION,
    hints: [
      {
        text: 'A portal for secrets, where dreams softly leap',
        isVisible: false,
      },
      {
        text: 'I’m a vessel of messages, in metal or stone',
        isVisible: false,
      },
    ],
    quest: {
      imgUrl: images.question.readingCat,
      text: 'I stand quietly, holding thoughts and dreams, both small and great. What am I, where moments and memories conflate?',
    },
    answer: 'THE_ANSWER_OF_THE_QUESTION_IN_THE_POST_BOX',
    isPassed: false,
  },
  {
    id: QuestId.THIRD_QUESTION,
    hints: [
      {
        text: 'I hold tiny dreams as the wheels spin around',
        isVisible: false,
      },
      {
        text: 'I bridge the adventures, from cot to the journey',
        isVisible: false,
      },
    ],
    quest: {
      imgUrl: images.question.movingCat,
      text: 'A guardian of comfort, in motion I excel. What am I, where safety and love intertwine well?',
    },
    answer: 'THE_ANSWER_OF_THE_QUESTION_IN_THE_BABY_CAR_SEAT',
    isPassed: false,
  },
  {
    id: QuestId.FOURTH_QUESTION,
    hints: [
      {
        text: 'In the dance of the drive, I cradle your weight',
        isVisible: false,
      },
      {
        text: "I'm a rest for the arm when the road feels long",
        isVisible: false,
      },
    ],
    quest: {
      imgUrl: images.question.restCat,
      text: "I close the gap, though there's nothing to see, A quiet companion when journeys ensue. What am I, where comfort and space agree?",
    },
    answer: 'THE_ANSWER_OF_THE_QUESTION_IN_THE_CAR',
    isPassed: false,
  },
  {
    id: QuestId.FINAL_QUESTION,
    hints: [
      {
        text: '1 = 0, 2 = 1, 10 = 1010',
        isVisible: false,
      },
      {
        text: 'BY - DD.MM.YYYY, PL - ?',
        isVisible: false,
      },
    ],
    quest: {
      imgUrl: images.question.final,
      text: 'Use your keys, where 14 = 10, 31 = 19',
    },
    answer: 'A_31_203_14_22',
    isPassed: false,
  },
];
