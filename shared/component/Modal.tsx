import {
  Modal,
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
import { ThemedSafeAreaView } from '@/shared/component/ThemedSafeAreaView';

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
      className={'bg-white-900 z-20'}
      style={[StyleSheet.absoluteFillObject, rnModalStyle]}
    >
      <StatusBar hidden />
      <Modal visible={isVisible}>
        <ThemedSafeAreaView className="flex-1 relative bg-white-900">
          <View className="absolute top-0 left-0 items-center z-10">
            <Pressable onPress={onClose} className="p-4">
              <MaterialIcons name="close" color={white.DEFAULT} size={24} />
            </Pressable>
          </View>
          <View className="flex-1">{children}</View>
        </ThemedSafeAreaView>
      </Modal>
    </Animated.View>
  );
};
