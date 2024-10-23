import { FC, useState } from 'react';
import { QuestComponent, QuestLayout, QuestType } from '@/entities/quest';
import { Scanner } from '@/shared/component';
import { View } from 'react-native';
import { CustomButton } from '@/shared/component/CustomButton';
import { useQuestViewData } from '../model/useQuestViewData';
import { HintFeature } from './hint/HintFeature';

interface QuestFeatureProps {
  questType: QuestType;
}

export const QuestFeature: FC<QuestFeatureProps> = ({ questType }) => {
  const [isOpenScanner, setIsOpenScanner] = useState(false);
  const { data, hasHint, showHint } = useQuestViewData(questType);

  return (
    <QuestLayout containerClass="pb-[20px]">
      {data && <QuestComponent hints={data.hints} quest={data.quest} />}

      <HintFeature showHint={hasHint} onSuccess={showHint} />

      <View className="w-full justify-center items-center pt-3">
        <CustomButton handlePress={() => setIsOpenScanner(true)} title="Scan" />
      </View>
      <Scanner
        isVisible={isOpenScanner}
        onClose={() => setIsOpenScanner(false)}
        onScanned={(data) => {
          console.log('RESULT_OF_SCANNING: ', data);

          if (data === 'A5_312031422') {
            return {
              rescan: true,
            };
          }

          setIsOpenScanner(false);
          // nextQuestion();

          // return {
          //   rescan: true,
          // };
        }}
      />
    </QuestLayout>
  );
};
