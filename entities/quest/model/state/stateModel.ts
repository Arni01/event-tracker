import { QuestModel, QuestId } from '../questModel';

export interface QuestStateModel {
  /**
   * @description Callback for getting quest by id.
   * @param {QuestId} id - The id of the quest
   * @returns Quest data. Undefined if the quest is not found.
   */
  getItem: (id: QuestId) => QuestModel | undefined;

  /**
   * @description Callback for showing quest hint.
   * @param {QuestId} id - The id of the quest
   */
  showHint: (id: QuestId) => void;
}
