import { useThemeColor } from '@/hooks/useThemeColor';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

interface HintButtonProps {
  onPress: () => void;
}

export function HintButton({ onPress }: HintButtonProps) {
  const { accent } = useThemeColor();

  return (
    <View className="absolute top-0 right-0 items-center z-10">
      <Pressable onPress={onPress} className="p-4">
        <MaterialCommunityIcons
          name="lightbulb-on-outline"
          color={accent.DEFAULT}
          size={24}
        />
      </Pressable>
    </View>
  );
}
