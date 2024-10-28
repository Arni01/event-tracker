import { Text, View } from 'react-native';

type Video = 'video';
type Audio = 'audio';
type Image = 'image';

interface HintItemMediaProps {
  media: Video | Audio | Image;
  questionText?: string;
}

export function HintItemMedia({ media, questionText }: HintItemMediaProps) {
  return (
    <View
      className="h-full w-full justify-start items-center"
      style={{ gap: 12 }}
    >
      {questionText && (
        <Text className="text-accent text-2xl font-semibold">
          {questionText}
        </Text>
      )}

      <Text>{media}</Text>
    </View>
  );
}
