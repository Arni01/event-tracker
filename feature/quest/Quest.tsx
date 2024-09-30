import { QuestLayout } from '@/components/QuestLayout';
import images from '@/constants/images';
import { FC, PropsWithChildren } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const quest = {
  imgUrl: images.thumbnail,
  text: 'TEST QUEST',
  helpers: [
    {
      text: 'TEST HELPER',
    },
  ],
};

export const QuestFeature: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QuestLayout
      onPressHelp={() => {}}
      containerClass="w-full flex-1 h-full pb-[20px]"
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          gap: 20,
          paddingBottom: 20,
          paddingTop: 60,
        }}
      >
        <View className="flex-row justify-center items-center rounded-xl overflow-hidden">
          <Image source={quest.imgUrl} className="w-full" resizeMode="cover" />
        </View>
        <Text className="text-3xl font-semibold text-white text-center">
          {quest.text}
        </Text>

        <View className="flex-row justify-center items-center rounded-xl overflow-hidden">
          <Image source={quest.imgUrl} className="w-full" resizeMode="cover" />
        </View>
        <Text className="text-3xl font-semibold text-white text-center">
          {quest.text}
        </Text>

        <View className="flex-row justify-center items-center rounded-xl overflow-hidden">
          <Image source={quest.imgUrl} className="w-full" resizeMode="cover" />
        </View>
        <Text className="text-3xl font-semibold text-white text-center">
          {quest.text}
        </Text>
      </ScrollView>

      {children}
    </QuestLayout>
  );
};
