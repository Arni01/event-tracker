import { BarcodeScanningResult, CameraView } from 'expo-camera';
import { Platform, useWindowDimensions } from 'react-native';
import { FC, useState } from 'react';
import { Overlay } from '@/components/Overlay';
import { ModalComponent } from '@/components/modal/Modal';
import { isBoundInHole } from './until';
import { ScannerResult } from './Model';
import { usePermissions } from '@/hooks/usePermissions';

const innerDimension = 300;

interface ScannerProps {
  isVisible: boolean;
  onClose: () => void;
  onScanned: (data: string) => void;
}

export const Scanner: FC<ScannerProps> = ({
  isVisible,
  onClose,
  onScanned,
}) => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();
  const [isScanned, setIsScanned] = useState(false);
  usePermissions();

  const handleBarcodeScanned = (result: BarcodeScanningResult) => {
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
      onScanned(data);
    }
  };

  return (
    <ModalComponent isVisible={isVisible} onClose={onClose}>
      {isVisible && (
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
      )}
    </ModalComponent>
  );
};
