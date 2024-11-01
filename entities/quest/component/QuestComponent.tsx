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
      className="w-full h-full"
    >
      <View style={{ gap: 20 }} className="w-full justify-start items-center">
        <View className="min-w-[200px] w-full max-w-[400px] max-h-[250px] h-full justify-center items-center rounded-2xl overflow-hidden">
          <Image
            source={quest.imgUrl}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
        <View className="justify-center w-full" style={{ gap: 30 }}>
          <Text className="text-xl font-bold text-white text-center">
            {quest.text}
          </Text>
          <View className="justify-center" style={{ gap: 10 }}>
            {hints.map((item, index) => (
              <View
                className="w-full bg-white-800 rounded-full"
                style={{
                  padding: 10,
                  paddingHorizontal: 12,
                }}
                key={index}
              >
                <Text
                  key={item.text}
                  className="text-xl font-medium text-white-200 text-center"
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
