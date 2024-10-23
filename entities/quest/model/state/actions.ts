import { DefaultQuestStore } from './defaultStore';
import { QuestModel } from '../questModel';
import { Dispatch } from 'react';

export enum QuestActionType {
  SHOW_HINT = 'SHOW_HINT',
  PASS_QUESTION = 'PASS_QUESTION',
}

export interface QuestAction {
  type: QuestActionType;
  payload: string;
}

export const showHintAction = (payload: string): QuestAction => {
  return {
    type: QuestActionType.SHOW_HINT,
    payload,
  };
};

export const passQuestionAction = (payload: string): QuestAction => {
  return {
    type: QuestActionType.PASS_QUESTION,
    payload,
  };
};

export enum StateActionType {
  INIT_STORE = 'INIT_STORE',
}

export interface StateAction {
  type: StateActionType;
  payload: QuestModel[];
}

const initStoreAction = (payload: QuestModel[]): StateAction => {
  return {
    type: StateActionType.INIT_STORE,
    payload,
  };
};

export const loadQuestState =
  () =>
  async (dispatch: Dispatch<StateAction>): Promise<void> => {
    dispatch(initStoreAction(DefaultQuestStore));
  };
