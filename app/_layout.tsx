import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { NativeWindStyleSheet } from 'nativewind';
import { useLoadMainData } from '@/hooks/useLoadMainData';
import { useThemeColor } from '@/hooks/useThemeColor';
import { OnboardingProvider } from '@/entities/onboarding';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function RootLayout() {
  const isLoaded = useLoadMainData();
  const { primary, white } = useThemeColor();

  if (!isLoaded) {
    return null;
  }

  return (
    <OnboardingProvider>
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
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="(quest)" options={{ headerShown: false }} />
      </Stack>
    </OnboardingProvider>
  );
}
