import images from '@/constants/images';
import { QuestModel, QuestId } from '../questModel';
import { ImageURISource } from 'react-native';

export const DefaultQuestStore: QuestModel[] = [
  {
    id: QuestId.FIRST_QUESTION,
    hints: [
      {
        text: 'test hint 1',
        isVisible: false,
      },
      {
        text: 'test hint 2',
        isVisible: false,
      },
    ],
    quest: {
      imgUrl: images.cards as ImageURISource,
      text: 'Test quest text here',
    },
    answer: 'TEST',
    isPassed: false,
  },
];
