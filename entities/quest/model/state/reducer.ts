import {
  QuestAction,
  QuestActionType,
  StateAction,
  StateActionType,
} from './actions';
import { QuestModel } from '../questModel';

interface State {
  isInit: boolean;
  data: Array<QuestModel>;
}

export const initialState: State = {
  isInit: false,
  data: [],
};

export const questReducer = (
  state: State,
  action: QuestAction | StateAction
): State => {
  switch (action.type) {
    case StateActionType.INIT_STORE:
      return {
        ...state,
        isInit: true,
        data: action.payload,
      };
    case QuestActionType.SHOW_HINT:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};
