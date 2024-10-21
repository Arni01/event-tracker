import { QuestModel, QuestType } from '../questModel';

export interface QuestStateModel {
  getItem: (id: QuestType) => QuestModel | undefined;
}
