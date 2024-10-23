import { FC } from 'react';
import { usePermissions } from './usePermissions';
import { ModalComponent } from '../Modal';
import { CameraProps, CameraWrapper } from './CameraWrapper';

interface ScannerProps extends CameraProps {
  isVisible: boolean;
  onClose: () => void;
}

export const Scanner: FC<ScannerProps> = ({
  isVisible,
  onClose,
  onScanned,
}) => {
  usePermissions();

  return (
    <ModalComponent isVisible={isVisible} onClose={onClose}>
      {isVisible && <CameraWrapper onScanned={onScanned} />}
    </ModalComponent>
  );
};
