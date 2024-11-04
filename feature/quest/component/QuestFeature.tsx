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
    </QuestLayout>
  );

  function handleSuccess() {
    passQuestion();
    onSuccess();
  }
};
