import { PropsWithChildren } from 'react';
import { useWindowDimensions } from 'react-native';
import Animated, { SlideInRight, SlideOutLeft } from 'react-native-reanimated';

export function SuccessLayout({ children }: PropsWithChildren) {
  const { height: SCREEN_HEIGHT } = useWindowDimensions();
  return (
    <Animated.View
      entering={SlideInRight}
      exiting={SlideOutLeft}
      className="flex-1 w-full h-full justify-between items-center p-3 pb-6"
      style={{ gap: 12, maxHeight: SCREEN_HEIGHT }}
    >
      {children}
    </Animated.View>
  );
}
