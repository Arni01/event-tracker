import { Canvas, DiffRect, rect, rrect } from '@shopify/react-native-skia';
import { FC } from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

function getOuter() {
  return rrect(rect(0, 0, width, height), 0, 0);
}

function getInner(innerWidth: number, innerHeight: number) {
  return rrect(
    rect(
      width / 2 - innerWidth / 2,
      height / 2 - innerHeight / 2,
      innerWidth,
      innerHeight
    ),
    50,
    50
  );
}

interface OverlayProps {
  innerWidth: number;
  innerHeight: number;
}

export const Overlay: FC<OverlayProps> = ({ innerWidth, innerHeight }) => {
  return (
    <Canvas className="flex-1" style={StyleSheet.absoluteFillObject}>
      <DiffRect
        inner={getInner(innerWidth, innerHeight)}
        outer={getOuter()}
        color="black"
        opacity={0.9}
      />
    </Canvas>
  );
};
