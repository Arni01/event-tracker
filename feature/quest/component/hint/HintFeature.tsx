import { useState } from 'react';
import { ModalComponent } from '@/shared/component';
import { HintList } from './HintList';
import { HintButton } from './HintButton';
import { Text, View } from 'react-native';

interface HintFeatureProps {
  showHint: boolean;
  onSuccess: () => void;
}

export function HintFeature({ showHint, onSuccess }: HintFeatureProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      {showHint && <HintButton onPress={onOpen} />}

      <ModalComponent isVisible={isOpenModal} onClose={onClose}>
        <View
          className="flex-1 justify-center items-center py-2"
          style={{ gap: 12 }}
        >
          <Text className="text-white text-2xl">Hints</Text>
          <HintList onSuccess={handleSuccess} />
        </View>
      </ModalComponent>
    </>
  );

  function onOpen() {
    setIsOpenModal(true);
  }

  function onClose() {
    setIsOpenModal(false);
  }

  function handleSuccess() {
    onClose();
    onSuccess();
  }
}
