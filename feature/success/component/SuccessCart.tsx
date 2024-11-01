import { PropsWithChildren } from 'react';
import { Image, ImageURISource, Text, View } from 'react-native';

interface SuccessCartProps {
  imageSource: ImageURISource;
}

function CardImage({
  imageSource,
  children,
}: SuccessCartProps & PropsWithChildren) {
  return (
    <View
      className="flex-shrink w-full justify-start items-center"
      style={{ gap: 12 }}
    >
      <View className="flex-shrink min-w-[200px] w-full max-w-[400px] max-h-[500px] h-full rounded-2xl overflow-hidden items-center justify-center">
        <Image
          source={imageSource}
          className="w-full h-auto"
          resizeMode="contain"
        />
      </View>
      {children}
    </View>
  );
}

function CartText({ text }: { text: string }) {
  return (
    <Text className="text-accent text-center text-xl font-semibold">
      {text}
    </Text>
  );
}

export const SuccessCart = {
  Text: CartText,
  Image: CardImage,
};
