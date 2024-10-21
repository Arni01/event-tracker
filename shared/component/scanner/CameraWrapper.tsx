import { Overlay } from '@/components/Overlay';
import { ScannerOptions } from './Model';
import { isBoundInHole } from './util';
import { BarcodeScanningResult, CameraView } from 'expo-camera';
import { FC, useState } from 'react';
import { useWindowDimensions, Platform } from 'react-native';
import { BarcodeBounds } from 'expo-camera';

const innerDimension = 300;

interface ScannerResult {
  boundingBox: BarcodeBounds;
  data: string;
}

export interface CameraProps {
  /**
   * @description Called when data is scanned
   * @returns {CameraScannerOptions | void} Optional object with a camera options.
   */
  onScanned: (data: string) => ScannerOptions | void;
}

export const CameraWrapper: FC<CameraProps> = ({ onScanned }) => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();
  const [isScanned, setIsScanned] = useState(false);

  const handleBarcodeScanned = async (result: BarcodeScanningResult) => {
    const { data, boundingBox } = result as unknown as ScannerResult;

    if (
      data &&
      !isScanned &&
      isBoundInHole(
        boundingBox,
        { width: SCREEN_WIDTH, height: SCREEN_HEIGHT },
        { width: innerDimension, height: innerDimension }
      )
    ) {
      setIsScanned(true);
      const result = onScanned(data);

      if (result?.rescan) {
        setIsScanned(false);
      }
    }
  };

  return (
    <CameraView
      className="w-full h-full"
      facing="back"
      mode="picture"
      ratio="16:9"
      barcodeScannerSettings={{
        barcodeTypes: ['qr', 'code128'],
      }}
      onBarcodeScanned={handleBarcodeScanned}
    >
      {Platform.OS !== 'web' && (
        <Overlay innerHeight={innerDimension} innerWidth={innerDimension} />
      )}
    </CameraView>
  );
};
