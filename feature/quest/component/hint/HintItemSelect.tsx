import { CustomButton } from '@/shared/component';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

interface SelectedStatusProps {
  isValid: boolean;
  index: number;
}

interface HintItemSelectProps {
  options: string[];
  answer: string;
  onSelect: (result: boolean) => void;
}

export function HintItemSelect({
  options,
  answer,
  onSelect,
}: HintItemSelectProps) {
  const [selectedStatus, setSelectedStatus] = useState<SelectedStatusProps>();

  useEffect(() => {
    if (selectedStatus) {
      setTimeout(() => onSelect(selectedStatus.isValid), 300);
    }
  }, [selectedStatus]);

  return (
    <View className="w-full" style={{ gap: 8 }}>
      {options.map((item, index) => (
        <CustomButton
          key={index}
          onPress={() => handlePress(item, index)}
          title={item}
          textStyles="text-white"
          containerClass={getButtonClass(index)}
        />
      ))}
    </View>
  );

  function handlePress(item: string, index: number) {
    if (item === answer) {
      setSelectedStatus({
        isValid: true,
        index,
      });
    } else {
      setSelectedStatus({
        isValid: false,
        index,
      });
    }
  }

  function getButtonClass(itemIndex: number): string {
    const defaultClass = 'rounded-full';

    let result = defaultClass;

    if (itemIndex === selectedStatus?.index) {
      result += selectedStatus.isValid ? ' bg-success-200' : ' bg-danger-200';
    } else {
      result += ' bg-info-200';
    }

    return result;
  }
}
