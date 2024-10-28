import { HintModel } from '@/feature/quest/model/hint/HintModel';
import { CustomButton } from '@/shared/component';
import { Text, View } from 'react-native';

interface HintItemProps {
  item: HintModel;
  onSuccess: () => void;
  onError: () => void;
}

export function HintItem({ onSuccess, item, onError }: HintItemProps) {
  return (
    <View className="flex-1 h-full w-full px-3">
      <View
        className={
          'bg-primary rounded-2xl h-full w-full justify-center items-center p-3'
        }
        style={{ gap: 20 }}
      >
        <View className="flex-1 justify-center">
          <Text className="text-white text-2xl">{item.question.text}</Text>
        </View>
        <View className="w-full">
          <CustomButton handlePress={onError} title="Next hint question" />

          <CustomButton handlePress={onSuccess} title="Click to continue" />
        </View>
      </View>
    </View>
  );
}
