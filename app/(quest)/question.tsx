import { QuestFeature } from '@/feature/quest';
import { useRouter } from 'expo-router';

export default function Question() {
  const router = useRouter();
  // const nextQuestion = useQuestionNavigation(QuestionRouter.FIRST_QUESTION);

  return (
    <QuestFeature
      // questType={QuestType.FIRST_QUESTION}
      onSuccess={() => router.replace('/(quest)/success')}
    >
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
