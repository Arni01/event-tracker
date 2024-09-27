import { View, Text } from 'react-native';
import React from 'react';
import { CustomButton } from '@/components/CustomButton';
import {
  QuestionRouter,
  useQuestionNavigation,
} from '@/hooks/useQuestionNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';

const SecondQuestionScreen = () => {
  const nextQuestion = useQuestionNavigation(QuestionRouter.SECOND_QUESTION);

  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full flex justify-center items-center h-full px-4">
        <Text className="text-3xl text-white">second_question</Text>
        <CustomButton
          title="Next Question"
          handlePress={nextQuestion}
          containerStyles="w-full"
        />
      </View>
    </SafeAreaView>
  );
};

export default SecondQuestionScreen;
