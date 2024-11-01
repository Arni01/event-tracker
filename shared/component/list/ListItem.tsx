import {
  useWindowDimensions,
  ImageURISource,
  Image,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface ListItemProps {
  item: { text: string[]; image: ImageURISource };
  index: number;
  x: SharedValue<number>;
}

const ListItemComponent = ({ item, index, x }: ListItemProps) => {
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
      className={'w-full h-full items-center justify-center gap-y-4 p-3'}
      style={[{ width: SCREEN_WIDTH }, rnImageStyle]}
    >
      <View
        className="flex-shrink w-full justify-start items-center"
        style={{ gap: 12 }}
      >
        <View className="flex-shrink min-w-[200px] w-full max-w-[400px] max-h-[500px] h-full rounded-2xl overflow-hidden items-center justify-center">
          <Image
            source={item.image}
            className="w-full h-auto"
            // style={{ height: SCREEN_WIDTH * 0.8 }}
            resizeMode="contain"
          />
        </View>
        <View>
          {item.text.map((text, index) => (
            <Text
              key={index}
              className={'font-semibold text-2xl text-accent text-center'}
            >
              {text}
            </Text>
          ))}
        </View>
      </View>
    </Animated.View>
  );
};

export const ListItem = React.memo(ListItemComponent);
