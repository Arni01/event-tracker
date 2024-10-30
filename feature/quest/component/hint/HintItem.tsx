import { View } from 'react-native';
import { HintItemMedia } from './HintItemMedia';
import { HintItemSelect } from './HintItemSelect';
import { HintModel, HintType } from '../../model/hint/hintModel';
import { HintItemType } from './HintItemType';

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
          <HintItemMedia media={item.media} questionText={getQuestionText()} />
        </View>

        {item.type === HintType.CHOICE_ANSWER && (
          <HintItemSelect
            options={item.options}
            answer={item.answer}
            onSelect={handleSubmit}
          />
        )}

        {item.type === HintType.TYPE_ANSWER && (
          <HintItemType answer={item.answer} onPress={handleSubmit} />
        )}
      </View>
    </View>
  );

  function handleSubmit(result: boolean) {
    return result ? onSuccess() : onError();
  }

  function getQuestionText() {
    if (item.questionText) {
      return item.questionText;
    }

    if (item.type === HintType.CHOICE_ANSWER) {
      return 'Choose the correct answer';
    }

    if (item.type === HintType.TYPE_ANSWER) {
      return 'Type the answer';
    }
  }
}
