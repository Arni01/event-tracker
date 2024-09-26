import { Href, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';

export enum QuestionRouter {
  FIRST_QUESTION = 'first_question',
  SECOND_QUESTION = 'second_question',
  THIRD_QUESTION = 'third_question',
  FOURTH_QUESTION = 'fourth_question',
}

const RouterMap: Record<QuestionRouter, Href> = {
  [QuestionRouter.FIRST_QUESTION]: '/second_question',
  [QuestionRouter.SECOND_QUESTION]: '/third_question',
  [QuestionRouter.THIRD_QUESTION]: '/fourth_question',
  [QuestionRouter.FOURTH_QUESTION]: '/final_question',
};

export const useQuestionNavigation = (initialData: QuestionRouter) => {
  const [question] = useState(initialData);
  const router = useRouter();

  const navigation = useCallback((currentQuestion = question) => {
    router.replace(RouterMap[currentQuestion]);
  }, []);

  return navigation;
};
