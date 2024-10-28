import { Text, View } from 'react-native';
import { HintModel, HintType } from '@/feature/quest/model/hint/HintModel';
import { HintItemMedia } from './HintItemMedia';
import { HintItemSelect } from '@/feature/quest/component/hint/HintItemSelect';

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
          'bg-primary rounded-3xl h-full w-full justify-center items-center p-3'
        }
        style={{ gap: 20 }}
      >
        <View className="flex-1 justify-center">
          <HintItemMedia data={item.content.media} />
          <Text className="text-white text-2xl">
            {item.content.questionText}
          </Text>
        </View>

        {item.answer.type === HintType.CHOICE_ANSWER && (
          <HintItemSelect
            options={item.answer.options}
            answer={item.answer.correctOption}
            onSelect={handleSelect}
          />
        )}
      </View>
    </View>
  );

  function handleSelect(result: boolean) {
    return result ? onSuccess() : onError();
  }
}
