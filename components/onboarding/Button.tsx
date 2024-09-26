import { Pressable } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';
import { FC } from 'react';

type OnboardingButtonProps = {
  isLast: SharedValue<boolean>;
  onPress: VoidFunction;
};

export const OnboardingButton: FC<OnboardingButtonProps> = ({
  onPress,
  isLast,
}) => {
  const { white } = useThemeColor();
  const rnBtnStyle = useAnimatedStyle(() => {
    console.log(isLast.value);

    return {
      width: isLast.value
        ? withSpring(140, { duration: 2000 })
        : withSpring(60),
    };
  }, [isLast]);

  const rnTextStyle = useAnimatedStyle(() => {
    return {
      opacity: isLast.value ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX: isLast ? withTiming(0) : withTiming(100),
        },
      ],
    };
  }, [isLast]);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: isLast.value ? withTiming(0) : withTiming(1),
      transform: [
        {
          translateX: isLast.value ? withSpring(100) : withTiming(0),
        },
      ],
    };
  }, [isLast]);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
    >
      <Animated.View
        className={
          'flex-row px-6 py-4 rounded-full bg-secondary items-center justify-center overflow-hidden h-[60px]'
        }
        style={rnBtnStyle}
      >
        <Animated.Text
          className={'text-white absolute text-base font-semibold'}
          style={rnTextStyle}
        >
          Get Started
        </Animated.Text>

        <Animated.View className={'absolute'} style={imageAnimatedStyle}>
          <Ionicons color={white.DEFAULT} name="arrow-forward" size={24} />
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};
