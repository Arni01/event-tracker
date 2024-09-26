import { StatusBar } from 'expo-status-bar';
import images from '@/constants/images';
import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView';
import { useThemeColor } from '@/hooks/useThemeColor';
import { usePermissions } from '@/hooks/usePermissions';
import { router } from 'expo-router';
import { OnboardingComponent } from '@/components/onboarding';

const pages = [
  {
    id: '1',
    text: 'Trusted by millions of people, part of one part',
    image: images.cards,
  },
  {
    id: '2',
    text: 'Spend money abroad, and track your expense',
    image: images.cards,
  },
  {
    id: '3',
    text: 'Receive Money From Anywhere In The World',
    image: images.cards,
  },
];

export default function OnboardingPage() {
  const { primary } = useThemeColor();

  usePermissions();

  const handlePress = () => {
    console.log('handlePress');

    router.replace('/first_question');
  };

  return (
    <ThemedSafeAreaView>
      <StatusBar backgroundColor={primary} style="light" />
      <OnboardingComponent data={pages} onPress={handlePress} />

      {/* <ScrollView
        contentContainerStyle={{
          height: '100%',
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{'\n'}
              Possibilities with{' '}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title="Let's start"
            handlePress={() => router.replace('/first_question')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView> */}
    </ThemedSafeAreaView>
  );
}
