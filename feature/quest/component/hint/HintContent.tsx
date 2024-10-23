import { Text, View } from 'react-native';
import { CustomButton } from '@/shared/component';

export interface HintContentProps {
  onSuccess: () => void;
}

export function HintContent({ onSuccess }: HintContentProps) {
  return (
    <View
      className="w-full h-full justify-center items-center px-3"
      style={{ gap: 20 }}
    >
      <Text className="text-white font-psemibold text-3xl">
        You have found the right answer!
      </Text>
      <CustomButton handlePress={onSuccess} title="Click to continue" />
    </View>
  );
}
