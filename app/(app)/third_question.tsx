import { View, Text } from 'react-native';
import React from 'react';
import { CustomButton } from '@/shared/component/CustomButton';
import {
  QuestionRouter,
  useQuestionNavigation,
} from '@/hooks/useQuestionNavigation';

const ThirdQuestionScreen = () => {
  const nextQuestion = useQuestionNavigation(QuestionRouter.THIRD_QUESTION);

  return (
    <View>
      <Text>third_question</Text>
      <CustomButton title="Next Question" handlePress={nextQuestion} />
    </View>
  );
};

export default ThirdQuestionScreen;
