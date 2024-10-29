import {
  AudioComponent,
  ImageComponent,
  VideoComponent,
} from '@/shared/component';
import { Text, View } from 'react-native';
import {
  HintAudioModel,
  HintImageModel,
  HintMediaType,
  HintVideoModel,
} from '../../model/hint/hintModel';

interface HintItemMediaProps {
  media: HintVideoModel | HintAudioModel | HintImageModel;
  questionText?: string;
}

export function HintItemMedia({ media, questionText }: HintItemMediaProps) {
  return (
    <View
      className="h-full w-full justify-start items-center pt-3"
      style={{ gap: 12 }}
    >
      {questionText && (
        <Text className="text-accent text-2xl font-semibold">
          {questionText}
        </Text>
      )}

      {media.type === HintMediaType.VIDEO && (
        <VideoComponent videoSource={media.videoUri} />
      )}

      {media.type === HintMediaType.AUDIO && (
        <AudioComponent
          audioSource={media.audioUri}
          imageSource={media.posterUri}
        />
      )}

      {media.type === HintMediaType.IMAGE && (
        <ImageComponent imageSource={media.imageUri} />
      )}
    </View>
  );
}
