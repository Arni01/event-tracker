import { FC, useState } from 'react';
import { Scanner, ScannerOptions } from '@/shared/component';
import { View } from 'react-native';
import { CustomButton } from '@/shared/component/CustomButton';

interface QuestScannerProps {
  /**
   * @description Function to handle scanned data.
   * @param {string} result - The result of scanning.
   * @returns Boolean. If result is valid, return true, else return false.
   */
  onScanned: (result: string) => boolean;
}

export const QuestScanner: FC<QuestScannerProps> = ({ onScanned: onScan }) => {
  const [isOpenScanner, setIsOpenScanner] = useState(false);

  return (
    <>
      <View className="w-full justify-center items-center pt-3">
        <CustomButton handlePress={handleOpen} title="Scan" />
      </View>
      <Scanner
        isVisible={isOpenScanner}
        onClose={handleClose}
        onScanned={handleScanned}
      />
    </>
  );

  function handleOpen() {
    setIsOpenScanner(true);
  }

  function handleClose() {
    setIsOpenScanner(false);
  }

  function handleScanned(data: string): ScannerOptions | void {
    console.log('RESULT_OF_SCANNING: ', data);

    if (!onScan(data)) {
      return {
        rescan: true,
      };
    }

    handleClose();
  }
};
