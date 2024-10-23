import { useState } from 'react';
import { ModalComponent } from '@/shared/component';
import { HintContent } from './HintContent';
import { HintButton } from './HintButton';

interface HintProps {
  showHint: boolean;
  onSuccess: () => void;
}

export function HintFeature({ showHint, onSuccess }: HintProps) {
  const [isOpenHint, setIsOpenHint] = useState(false);

  return (
    <>
      {showHint && <HintButton onPress={onOpen} />}

      <ModalComponent isVisible={isOpenHint} onClose={onClose}>
        {isOpenHint && <HintContent onSuccess={handleSuccess} />}
      </ModalComponent>
    </>
  );

  function onOpen() {
    setIsOpenHint(true);
  }

  function onClose() {
    setIsOpenHint(false);
  }

  function handleSuccess() {
    onSuccess();
    onClose();
  }
}
