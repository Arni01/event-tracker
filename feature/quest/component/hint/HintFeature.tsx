import { useState } from 'react';
import { ModalComponent } from '@/shared/component';
import { HintList } from './HintList';
import { HintButton } from './HintButton';
import { Text, View } from 'react-native';
import { useHintStore } from '../../model/hint/useHintStore';

interface HintFeatureProps {
  hasHint: boolean;
  onSuccess: () => void;
}

export function HintFeature({ hasHint, onSuccess }: HintFeatureProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const data = useHintStore((state) => state.data);
  const moveHintToEnd = useHintStore((state) => state.moveHintToEnd);
  const passHint = useHintStore((state) => state.passHint);

  return (
    <>
      {hasHint && <HintButton onPress={onOpen} />}

      <ModalComponent isVisible={isOpenModal} onClose={onClose}>
        <View
          className="flex-1 justify-center items-center py-2"
          style={{ gap: 12 }}
        >
          <Text className="text-white text-2xl">Hints</Text>
          <HintList
            data={data}
            onSuccess={handleSuccess}
            onError={handleError}
          />
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

  function handleSuccess(itemId: string) {
    onClose();

    passHint(itemId);

    onSuccess();
  }

  function handleError(itemId: string) {
    moveHintToEnd(itemId);
  }
}
