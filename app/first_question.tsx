import { Text, View } from 'react-native';
import { router } from 'expo-router';
import { CustomButton } from '@/components/CustomButton';
import {
  QuestionRouter,
  useQuestionNavigation,
} from '@/hooks/useQuestionNavigation';
import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView';

export default function QuestionStart() {
  const nextQuestion = useQuestionNavigation(QuestionRouter.FIRST_QUESTION);

  return (
    <ThemedSafeAreaView>
      <View className="flex my-6 px-4 space-y-6">
        <View className="flex justify-between items-start flex-row mb-6">
          <Text className="font-psemibold text-2xl text-white"></Text>
        </View>
      </View>

      <View style={{ gap: 20 }}>
        <CustomButton
          handlePress={() => router.push('/scanner')}
          title="Scan"
        ></CustomButton>

        <CustomButton
          handlePress={() => router.push('/helper')}
          title="Helper"
        ></CustomButton>

        <CustomButton
          handlePress={nextQuestion}
          title="Second question"
        ></CustomButton>
      </View>
    </ThemedSafeAreaView>
  );
}
