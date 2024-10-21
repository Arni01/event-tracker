import images from '@/constants/images';
import { QuestModel, QuestType } from '../questModel';
import { ImageURISource } from 'react-native';

export const DefaultQuestStore: QuestModel[] = [
  {
    id: QuestType.FIRST_QUESTION,
    hints: [
      {
        text: 'test hint 1',
        isVisible: true,
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
    isPassed: false,
  },
];
