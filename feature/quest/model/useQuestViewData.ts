import { QuestModel, QuestType, useQuestState } from '@/entities/quest';
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
}

export const useQuestViewData = (questId: QuestType): ReturnProps => {
  const { getItem, showHint } = useQuestState();

  const currentQuest = getItem(questId);

  const result: ReturnProps = useMemo(() => {
    return {
      data: currentQuest && {
        ...currentQuest,
        hints: currentQuest.hints.filter((hint) => hint.isVisible),
      },
      hasHint: Boolean(currentQuest?.hints.some((hint) => !hint.isVisible)),
      showHint: () => showHint(questId),
    };
  }, [currentQuest, questId]);

  return result;
};
