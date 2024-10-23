import {
  QuestionRouter,
  useQuestionNavigation,
} from '@/hooks/useQuestionNavigation';
import { QuestFeature } from '@/feature/quest';
import { QuestType } from '@/entities/quest';

export default function QuestionStart() {
  const nextQuestion = useQuestionNavigation(QuestionRouter.FIRST_QUESTION);

  // return (
  //   <QuestFeature questType={QuestType.FIRST_QUESTION}>
  //     {/* <View
  //       className="w-full justify-center items-center pt-3"
  //       style={{ gap: 20 }}
  //     >
  //       <CustomButton
  //         handlePress={() => setIsOpenScanner(true)}
  //         title="Scan"
  //         // containerClass="mb-4"
  //       ></CustomButton> */}

  //     {/* <CustomButton
  //         handlePress={() => router.push('/helper')}
  //         title="Helper"
  //       ></CustomButton> */}

  //     {/* <CustomButton
  //         handlePress={nextQuestion}
  //         title="Second question"
  //       ></CustomButton> */}
  //     {/* </View> */}
  //   </QuestFeature>
  // );
}
