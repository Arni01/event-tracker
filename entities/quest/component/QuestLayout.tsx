import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView';
import { FC, PropsWithChildren } from 'react';

interface QuestLayoutProps {
  containerClass?: string;
}

export const QuestLayout: FC<QuestLayoutProps & PropsWithChildren> = ({
  containerClass,
  children,
}) => {
  return (
    <ThemedSafeAreaView
      className={`flex-1 w-full h-full justify-center items-center px-4 ${containerClass}`}
    >
      {children}
    </ThemedSafeAreaView>
  );
};
