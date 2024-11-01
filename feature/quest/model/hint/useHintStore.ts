import { create } from 'zustand';
import { DefaultHintStore } from './defaultHintStore';
import { HintModel } from './hintModel';

interface HintStoreModel {
  data: HintModel[];
  passHint: (hintId: string) => void;
  moveHintToEnd: (hintId: string) => void;
}

export const useHintStore = create<HintStoreModel>((set) => ({
  data: DefaultHintStore,
  passHint: (hintId: string) =>
    set((state) => ({
      data: state.data.filter((item) => item.id !== hintId),
    })),
  moveHintToEnd: (hintId: string) =>
    set((state) => {
      const item = state.data.find((item) => item.id === hintId);
      const result = state.data.filter((item) => {
        return item.id !== hintId;
      });

      if (item) {
        result.push({
          ...item,
          id: new Date().getTime().toString(),
        });
      }

      return {
        data: result,
      };
    }),
}));
