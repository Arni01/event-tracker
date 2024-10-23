import { QuestModel, QuestId } from '../questModel';

export interface QuestStateModel {
  /**
   * @description Callback for getting current available quest.
   * @returns Quest data. Undefined if the quest is not found.
   */
  getAvailableQuest: () => QuestModel | undefined;

  /**
   * @description Callback for showing quest hint.
   * @param {QuestId} id - The id of the quest
   */
  showHint: (id: QuestId) => void;

  /**
   * @description Callback for passing question
   * @param {QuestId} id - The id of the quest
   */
  passQuestion: (id: QuestId) => void;
}
