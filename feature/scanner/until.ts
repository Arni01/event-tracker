import { BarcodeBounds } from 'expo-camera';

export const isBoundInHole = (
  boundingBox: BarcodeBounds,
  screen: { width: number; height: number },
  hole: { width: number; height: number }
) => {
  const xHole = screen.width / 2 - hole.width / 2;
  const yHole = screen.height / 2 - hole.height / 2;
  const top = boundingBox.origin.x;
  const left = screen.width - boundingBox.origin.y - boundingBox.size.height;
  const width = boundingBox.size.height;
  const height = boundingBox.size.width;

  return (
    left > xHole &&
    left + width < xHole + hole.width &&
    top > yHole &&
    top + height < yHole + hole.height
  );
};
