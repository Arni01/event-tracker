import { ImageURISource } from 'react-native';
import {
  QuestionRouter,
  useQuestionNavigation,
} from '@/hooks/useQuestionNavigation';
import images from '@/constants/images';
import { QuestFeature } from '@/feature/quest';
import { QuestType } from '@/entities/quest';

const data = {
  quest: {
    imgUrl: images.cards as ImageURISource,
    text: 'Test quest text here test quest text here test quest text here',
  },
  hints: [
    {
      text: 'test hint 1 rgrdhd dhdr drhehdrhdrh djhd ',
    },
    {
      text: 'test hint 2',
    },
    {
      text: 'test hint 3',
    },
    {
      text: 'test hint 4',
    },
    {
      text: 'test hint 5',
    },
    {
      text: 'test hint 6',
    },
  ],
};

export default function QuestionStart() {
  const nextQuestion = useQuestionNavigation(QuestionRouter.FIRST_QUESTION);

  return (
    <QuestFeature questType={QuestType.FIRST_QUESTION}>
      {/* <View
        className="w-full justify-center items-center pt-3"
        style={{ gap: 20 }}
      >
        <CustomButton
          handlePress={() => setIsOpenScanner(true)}
          title="Scan"
          // containerClass="mb-4"
        ></CustomButton> */}

      {/* <CustomButton
          handlePress={() => router.push('/helper')}
          title="Helper"
        ></CustomButton> */}

      {/* <CustomButton
          handlePress={nextQuestion}
          title="Second question"
        ></CustomButton> */}
      {/* </View> */}
    </QuestFeature>
  );
}
