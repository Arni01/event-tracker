import { useWindowDimensions, ImageURISource, Image, Text } from 'react-native';
import React from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

type Props = {
  item: { text: string; image: ImageURISource };
  index: number;
  x: SharedValue<number>;
};

const ListItem = ({ item, index, x }: Props) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const rnImageStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [100, 0, 100],

      Extrapolation.CLAMP
    );
    const opacity = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [0, 1, 0],
      Extrapolation.CLAMP
    );
    return { opacity, transform: [{ translateY }] };
  }, [index, x]);

  return (
    <Animated.View
      className={'w-full h-full items-center justify-center gap-y-4'}
      style={[{ width: SCREEN_WIDTH }, rnImageStyle]}
    >
      <Image
        source={item.image}
        style={{ height: SCREEN_WIDTH * 0.8 }}
        resizeMode="contain"
      />
      <Text className={'font-semibold text-3xl text-white text-center'}>
        {item.text}
      </Text>
    </Animated.View>
  );
};

export default React.memo(ListItem);
