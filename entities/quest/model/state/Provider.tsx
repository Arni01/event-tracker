import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { initialState, questReducer } from './reducer';
import { QuestStateModel } from './stateModel';
import { loadQuestState, QuestActionType, showHintAction } from './actions';
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
    getItem: (id: QuestId) => {
      return state.data.find((item) => item.id === id);
    },
    showHint: (id: QuestId) => {
      dispatch(showHintAction(id));
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
