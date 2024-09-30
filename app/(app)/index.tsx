import { View } from 'react-native';
import { CustomButton } from '@/components/CustomButton';
import {
  QuestionRouter,
  useQuestionNavigation,
} from '@/hooks/useQuestionNavigation';
import { useState } from 'react';
import { Scanner } from '@/feature/scanner/Scanner';
import { QuestFeature } from '@/feature/quest';

export default function QuestionStart() {
  const [isOpenScanner, setIsOpenScanner] = useState(false);
  const nextQuestion = useQuestionNavigation(QuestionRouter.FIRST_QUESTION);

  return (
    <QuestFeature>
      {/* <View>
        <View className="justify-between items-start flex-row mb-6">
          <Text className="font-psemibold text-2xl text-white"></Text>
        </View>
      </View> */}

      <View className="w-full justify-center items-center" style={{ gap: 20 }}>
        <CustomButton
          handlePress={() => setIsOpenScanner(true)}
          title="Scan"
          // containerClass="mb-4"
        ></CustomButton>

        {/* <CustomButton
          handlePress={() => router.push('/helper')}
          title="Helper"
        ></CustomButton> */}

        {/* <CustomButton
          handlePress={nextQuestion}
          title="Second question"
        ></CustomButton> */}
      </View>

      <Scanner
        isVisible={isOpenScanner}
        onClose={() => setIsOpenScanner(false)}
        onScanned={(data) => {
          console.log('RESULT_OF_SCANNING: ', data);
          // nextQuestion();
        }}
      />
    </QuestFeature>
  );
}
