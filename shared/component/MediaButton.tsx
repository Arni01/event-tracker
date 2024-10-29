import { useThemeColor } from '@/hooks/useThemeColor';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

type ButtonType = 'play' | 'pause' | 'replay';

interface MediaButtonProps {
  onPress: () => void;
  type: ButtonType;
}

const IconName: Record<
  ButtonType,
  React.ComponentProps<typeof MaterialCommunityIcons>['name']
> = {
  play: 'play-circle-outline',
  pause: 'pause-circle-outline',
  replay: 'replay',
};

export function MediaButton({ onPress, type }: MediaButtonProps) {
  const { accent } = useThemeColor();

  return (
    <Pressable className="p-4" onPress={onPress}>
      <MaterialCommunityIcons
        name={IconName[type]}
        size={40}
        color={accent.DEFAULT}
      />
    </Pressable>
  );
}
