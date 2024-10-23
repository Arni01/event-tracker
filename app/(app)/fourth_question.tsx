import { View, Text } from 'react-native';
import React from 'react';
import {
  QuestionRouter,
  useQuestionNavigation,
} from '@/hooks/useQuestionNavigation';
import { CustomButton } from '@/shared/component';

const FourthQuestionScreen = () => {
  const nextQuestion = useQuestionNavigation(QuestionRouter.FOURTH_QUESTION);

  return (
    <View>
      <Text>fourth_question</Text>
      <CustomButton title="Next Question" handlePress={nextQuestion} />
    </View>
  );
};

export default FourthQuestionScreen;
