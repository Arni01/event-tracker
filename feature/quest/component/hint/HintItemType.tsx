import { CustomButton, FormField } from '@/shared/component';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

interface HintItemTypeProps {
  answer: string;
  onPress: (result: boolean) => void;
}

export function HintItemType({ answer, onPress }: HintItemTypeProps) {
  const [typedStatus, setTypedStatus] = useState<boolean | null>(null);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    if (typedStatus !== null) {
      setTimeout(() => onPress(typedStatus), 300);
    }
  }, [typedStatus]);

  return (
    <View className="w-full py-3" style={{ gap: 12 }}>
      <FormField
        placeholder="Type here"
        value={value}
        onChangeText={setValue}
      />
      <CustomButton
        onPress={handlePress}
        title="Check"
        // textStyles="text-white"
        containerClass={getButtonClass()}
      />
    </View>
  );

  function handlePress() {
    const result = value.length > 5 && answer.includes(value);
    setTypedStatus(result);
  }

  function getButtonClass(): string {
    let result = '';

    if (typedStatus !== null) {
      result += typedStatus ? ' bg-success-200' : ' bg-danger-200';
    }

    return result;
  }
}
