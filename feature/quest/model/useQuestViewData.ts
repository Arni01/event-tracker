import { QuestModel, useQuestState } from '@/entities/quest';
import { useMemo } from 'react';

interface ReturnProps {
  data: QuestModel | undefined;
  /**
   * @description Flag indicating whether the quest has hints. True if the quest has hints, false otherwise.
   */
  hasHint: boolean;
  /**
   * @description Function to show the quest hint
   */
  showHint: () => void;
  /**
   * @description Function to pass the quest
   */
  passQuestion: () => void;
}

export const useQuestViewData = (): ReturnProps => {
  const { getAvailableQuest, showHint, passQuestion } = useQuestState();

  const currentQuest = getAvailableQuest();

  const result: ReturnProps = useMemo(() => {
    return {
      data: currentQuest && {
        ...currentQuest,
        hints: currentQuest.hints.filter((hint) => hint.isVisible),
      },
      hasHint: Boolean(currentQuest?.hints.some((hint) => !hint.isVisible)),
      showHint: () => currentQuest?.id && showHint(currentQuest?.id),
      passQuestion: () => currentQuest?.id && passQuestion(currentQuest?.id),
    };
  }, [currentQuest]);

  return result;
};
