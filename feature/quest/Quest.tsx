import { QuestLayout } from '@/components/QuestLayout';
import images from '@/constants/images';
import { FC, PropsWithChildren } from 'react';
import { View, Text, Image, ScrollView, ImageURISource } from 'react-native';

const quest = {
  imgUrl: images.cards as ImageURISource,
  text: 'Test quest text here test quest text here test quest text here',
  hints: [
    {
      text: 'test hint 1',
    },
    {
      text: 'test hint 2',
    },
    {
      text: 'test hint 3',
    },
  ],
};

export const QuestFeature: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QuestLayout
      onPressHelp={() => {}}
      containerClass="flex-1 w-full h-full pb-[20px]"
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
        <View style={{ gap: 20 }}>
          <View className="flex-row w-full justify-center items-center rounded-xl overflow-hidden">
            <Image
              source={quest.imgUrl}
              className="w-full aspect-[4/3]"
              resizeMode="cover"
            />
          </View>
          <View className="justify-center" style={{ gap: 30 }}>
            <Text className="text-3xl font-semibold text-white text-center">
              {quest.text}
            </Text>
            <View className="justify-center" style={{ gap: 10 }}>
              {quest.hints.map((hint, index) => (
                <View className="bg-info-400 rounded-lg p-2" key={index}>
                  <Text
                    key={hint.text}
                    className="text-2xl text-accent text-center"
                  >
                    {hint.text}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {children}
    </QuestLayout>
  );
};
