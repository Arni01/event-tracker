import { BarcodeBounds } from 'expo-camera';

export interface ScannerResult {
  boundingBox: BarcodeBounds;
  data: string;
}
