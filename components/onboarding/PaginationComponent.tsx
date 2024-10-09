import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React, { useCallback } from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useThemeColor } from '@/hooks/useThemeColor';

type Props = {
  length: number;
  x: SharedValue<number>;
};

export const PaginationElement = ({ length, x }: Props) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const { accent, white } = useThemeColor();

  const PaginationComponent = useCallback(({ index }: { index: number }) => {
    const itemRnStyle = useAnimatedStyle(() => {
      const width = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [35, 16, 35],
        Extrapolation.CLAMP
      );

      const bgColor = interpolateColor(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [white[200], accent.DEFAULT, white[200]]
      );

      return {
        width,
        backgroundColor: bgColor,
      };
    }, [x]);
    return (
      <Animated.View
        className={'w-[35px] h-[10px] rounded-full m-1'}
        style={itemRnStyle}
      />
    );
  }, []);

  return (
    <View className="flex-row justify-center items-center">
      {Array.from({ length }).map((_, index) => {
        return <PaginationComponent index={index} key={index} />;
      })}
    </View>
  );
};
