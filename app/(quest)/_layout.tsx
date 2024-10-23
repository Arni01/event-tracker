import { Redirect, Stack } from 'expo-router';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useOnboardingContext } from '@/context/onboarding';
import { QuestProvider } from '@/entities/quest';

export default function QuestLayout() {
  // const { isActiveOnboarding } = useOnboardingContext();
  const { primary, white } = useThemeColor();

  // if (isActiveOnboarding) {
  //   return <Redirect href="/onboarding" />;
  // }

  return (
    <QuestProvider>
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: primary.DEFAULT,
          },
          headerStyle: {
            backgroundColor: primary.DEFAULT,
          },
          headerTintColor: white.DEFAULT,
          animation: 'slide_from_right',
          animationTypeForReplace: 'push',
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="question" options={{ headerShown: false }} />
        <Stack.Screen name="success" options={{ headerShown: false }} />
        {/* <Stack.Screen name="second_question" options={{ headerShown: false }} />
        <Stack.Screen name="third_question" options={{ headerShown: false }} />
        <Stack.Screen name="fourth_question" options={{ headerShown: false }} />
        <Stack.Screen name="final_question" options={{ headerShown: false }} /> */}
      </Stack>
    </QuestProvider>
  );
}
