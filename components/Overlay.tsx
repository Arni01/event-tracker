import { useHeaderHeight } from '@react-navigation/elements';
import { Canvas, DiffRect, rect, rrect } from '@shopify/react-native-skia';
import { FC, PropsWithChildren } from 'react';
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const innerDimension = 300;

function getOuter(currentHeight: number) {
  return rrect(rect(0, 0, width, currentHeight), 0, 0);
}

function getInner(currentHeight: number) {
  return rrect(
    rect(
      width / 2 - innerDimension / 2,
      currentHeight / 2 - innerDimension / 2,
      innerDimension,
      innerDimension
    ),
    50,
    50
  );
}

export const Overlay = () => {
  const headerHeight = useHeaderHeight();
  const currentHeight = height;

  // const currentHeight = height - headerHeight;

  return (
    <Canvas
      className="flex-1"
      style={
        // Platform.OS === 'android' ? { flex: 1 } :
        StyleSheet.absoluteFillObject
      }
    >
      <DiffRect
        inner={getInner(currentHeight)}
        outer={getOuter(currentHeight)}
        color="black"
        opacity={0.5}
      />
    </Canvas>
  );
};
