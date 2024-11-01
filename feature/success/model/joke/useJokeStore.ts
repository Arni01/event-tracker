import { create } from 'zustand';
import { JokeModel } from './jokeModel';
import { DefaultJokeStore } from './defaultJokeStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

enum LocalSateKey {
  JOKES = 'JOKES',
}

interface JokeStoreModel {
  isInit: boolean;
  data: JokeModel[];
  passJoke: () => void;
  init: () => void;
}

export const useJokeStore = create<JokeStoreModel>((set) => ({
  isInit: false,
  data: [],
  passJoke: () => {
    set((state) => {
      const result = state.data.slice(1);

      // AsyncStorage.setItem(LocalSateKey.JOKES, JSON.stringify(result));

      return {
        data: result,
      };
    });
  },
  init: async () => {
    let state = DefaultJokeStore;

    try {
      await AsyncStorage.clear();
      // const localState = await AsyncStorage.getItem(LocalSateKey.JOKES);

      // if (localState) {
      //   state = JSON.parse(localState);
      // }
    } catch (error) {
    } finally {
      set({ data: state, isInit: true });
    }
  },
}));
