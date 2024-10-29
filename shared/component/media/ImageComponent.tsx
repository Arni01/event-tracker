import { Image, ImageURISource, View } from 'react-native';

interface ImageComponentProps {
  imageSource: ImageURISource;
}

export function ImageComponent({ imageSource }: ImageComponentProps) {
  return (
    <View className="flex-row w-full justify-center items-center rounded-xl overflow-hidden">
      <Image
        source={imageSource}
        className="w-full aspect-square"
        resizeMode="cover"
      />
    </View>
  );
}
