import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { initialState, questReducer } from './reducer';
import { QuestStateModel } from './stateModel';
import { loadQuestState } from './actions';
import { QuestType } from '../questModel';

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
    getItem: (id: QuestType) => {
      return state.data.find((item) => item.id === id);
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
