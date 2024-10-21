import { QuestHintModel, QuestContentModel } from '../model/questModel';
import { FC } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

interface QuestComponentProps {
  quest: QuestContentModel;
  hints: QuestHintModel[];
}

export const QuestComponent: FC<QuestComponentProps> = ({ quest, hints }) => {
  return (
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
            {hints.map((item, index) => (
              <View className="bg-info-400 rounded-full p-2" key={index}>
                <Text
                  key={item.text}
                  className="text-xl text-white text-center"
                >
                  {item.text}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
