import { images } from '@/constants';
import { ThemedSafeAreaView } from '@/shared/component';
import { Image, Text, View } from 'react-native';

export default function Final() {
  return (
    <ThemedSafeAreaView>
      <View
        className="flex-1 w-full h-full justify-between items-center p-3 pb-6"
        style={{ gap: 12 }}
      >
        <View
          className="flex-shrink w-full justify-start items-center"
          style={{ gap: 12 }}
        >
          <View className="flex-shrink min-w-[200px] w-full max-w-[400px] max-h-[430px] h-full rounded-2xl overflow-hidden items-center justify-center">
            <Image
              source={images.success.pickingUpCat}
              className="w-full h-auto"
              resizeMode="contain"
            />
          </View>
          <View style={{ gap: 20 }}>
            <View style={{ gap: 8 }}>
              <Text className="text-accent text-center text-xl font-bold">
                Meow! 🎉🎉🎉 Congratulations, brave adventurer!
              </Text>
              <Text className="text-accent text-center text-lg font-medium">
                You've bravely passed every challenge and deserve your reward.
                Come to my favorite cozy place, There you'll find a present
                filled with purring delights!
              </Text>
            </View>
            <View style={{ gap: 4 }}>
              <Text className="text-accent text-center text-2xl font-semibold">
                Tomorrow at 11 a.m.
              </Text>
              <Text className="text-accent text-center text-2xl font-semibold">
                52°13'36.5"N 21°08'26.9"E
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ThemedSafeAreaView>
  );
}
