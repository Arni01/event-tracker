import { StatusBar } from 'expo-status-bar';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Redirect, router, Stack } from 'expo-router';
import { AppOnboarding } from '@/feature/appOnboarding';
import { useGlobalContext } from '@/context/GlobalProvider';

export default function OnboardingPage() {
  const { closeOnboarding, isActiveOnboarding } = useGlobalContext();
  const { primary } = useThemeColor();

  if (!isActiveOnboarding) {
    <Redirect href="/" />;
  }

  const handlePress = () => {
    closeOnboarding();
    router.replace('/');
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      {/* <StatusBar backgroundColor={primary} style="light" /> */}
      <StatusBar hidden={true} />
      <AppOnboarding onPress={handlePress} />

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
    </>
  );
}
