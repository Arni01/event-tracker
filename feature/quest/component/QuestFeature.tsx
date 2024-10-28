import { FC } from 'react';
import { QuestComponent, QuestLayout } from '@/entities/quest';
import { useQuestViewData } from '../model/useQuestViewData';
import { HintFeature } from './hint/HintFeature';
import { QuestScanner, ScannedResultType } from './QuestScanner';

interface QuestFeatureProps {
  onSuccess: () => void;
}

export const QuestFeature: FC<QuestFeatureProps> = ({ onSuccess }) => {
  const { data, hasHint, showHint, passQuestion } = useQuestViewData();

  return (
    <QuestLayout containerClass="pb-[20px]">
      {data && <QuestComponent hints={data.hints} quest={data.quest} />}

      <HintFeature hasHint={hasHint} onSuccess={showHint} />

      <QuestScanner
        onScanned={(result) => {
          if (result !== data?.answer) {
            return ScannedResultType.INVALID;
          }

          handleSuccess();
        }}
      />

      {/* <View className="w-full justify-center items-center pt-3">
        <CustomButton handlePress={handleSuccess} title="Scan" /> */}
      {/* <CustomButton handlePress={() => setIsOpenScanner(true)} title="Scan" /> */}
      {/* </View> */}
      {/* <Scanner
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
      /> */}
    </QuestLayout>
  );

  function handleSuccess() {
    passQuestion();
    onSuccess();
  }
};
