import { Text } from 'react-native';

type Video = 'video';
type Audio = 'audio';
type Image = 'image';

interface HintItemMediaProps {
  data: Video | Audio | Image;
}

export function HintItemMedia({ data }: HintItemMediaProps) {
  return <Text>{data}</Text>;
}
