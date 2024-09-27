import {
  Pressable,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { FC, PropsWithChildren } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { useThemeColor } from '@/hooks/useThemeColor';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ModalComponentProps {
  isVisible: boolean;
  onClose: () => void;
}

export const ModalComponent: FC<ModalComponentProps & PropsWithChildren> = ({
  isVisible,
  onClose,
  children,
}) => {
  const { white } = useThemeColor();
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const rnModalStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: isVisible ? withTiming(0) : withTiming(SCREEN_WIDTH),
        },
      ],
    };
  }, [isVisible]);

  return (
    <Animated.View
      className={'bg-primary'}
      style={[StyleSheet.absoluteFillObject, rnModalStyle]}
    >
      <StatusBar hidden />

      {isVisible && (
        <SafeAreaView className="flex-1 w-full h-full relative">
          <View className="absolute top-0 left-0 items-center z-20">
            <Pressable onPress={onClose} className="p-4">
              <MaterialIcons name="close" color={white.DEFAULT} size={24} />
            </Pressable>
          </View>
          <View className="flex-1 relative">{children}</View>
        </SafeAreaView>
      )}
    </Animated.View>
  );
};
