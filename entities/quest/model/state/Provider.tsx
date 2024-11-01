import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { initialState, questReducer } from './reducer';
import { QuestStateModel } from './stateModel';
import { loadQuestState, passQuestionAction, showHintAction } from './actions';
import { QuestId } from '../questModel';

const Context = createContext<QuestStateModel | null>(null);

export const useQuestState = () => {
  const value = useContext(Context);

  if (!value) {
    throw new Error('useQuestState must be wrapped in a <QuestProvider />');
  }

  return value;
};

export const QuestProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(questReducer, initialState);

  useEffect(() => {
    if (!state.isInit) {
      loadQuestState()(dispatch);
    }
  }, []);

  if (!state.isInit) {
    return null;
  }

  const value: QuestStateModel = {
    iFinalQuestionPass: state.data.length === 0,
    getAvailableQuest: () => {
      return state.data.find((item) => !item.isPassed);
    },
    showHint: (id: QuestId) => {
      dispatch(showHintAction(id));
    },
    passQuestion: (id: QuestId) => {
      dispatch(passQuestionAction(id));
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
