import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView';
import { useThemeColor } from '@/hooks/useThemeColor';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FC, PropsWithChildren } from 'react';
import { Pressable, View } from 'react-native';

interface QuestLayoutProps {
  onPressHint: () => void;
  containerClass?: string;
}

export const QuestLayout: FC<QuestLayoutProps & PropsWithChildren> = ({
  onPressHint,
  containerClass,
  children,
}) => {
  const { accent } = useThemeColor();

  return (
    <ThemedSafeAreaView
      className={`flex-1 w-full h-full justify-center items-center px-4 ${containerClass}`}
    >
      <View className="absolute top-0 right-0 items-center z-10">
        <Pressable onPress={onPressHint} className="p-4">
          <MaterialCommunityIcons
            name="lightbulb-on-outline"
            color={accent.DEFAULT}
            size={24}
          />
        </Pressable>
      </View>
      {children}
    </ThemedSafeAreaView>
  );
};
