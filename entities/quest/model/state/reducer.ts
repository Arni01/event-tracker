import {
  QuestAction,
  QuestActionType,
  StateAction,
  StateActionType,
} from './actions';
import { QuestHintModel, QuestModel } from '../questModel';

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
        data: state.data.map((item) => {
          return item.id === action.payload
            ? {
                ...item,
                hints: showOneOfHints(item.hints),
              }
            : item;
        }),
      };
    case QuestActionType.PASS_QUESTION:
      return {
        ...state,
        data: state.data.map((item) => {
          return item.id === action.payload
            ? { ...item, isPassed: true }
            : item;
        }),
      };
    default:
      return { ...state };
  }
};

function showOneOfHints(hints: Array<QuestHintModel>) {
  const result = [...hints];

  for (let hint of result) {
    if (!hint.isVisible) {
      hint.isVisible = true;
      break;
    }
  }

  return result;
}
