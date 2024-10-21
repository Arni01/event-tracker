import { QuestModel, QuestType, useQuestState } from '@/entities/quest';

export const useGetQuest = (questType: QuestType): QuestModel | undefined => {
  const { getItem } = useQuestState();

  let result = getItem(questType);

  if (result) {
    result = {
      ...result,
      hints: result.hints.filter((hint) => hint.isVisible),
    };
  }

  return result;
};
