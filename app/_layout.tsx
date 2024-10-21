import { Slot } from 'expo-router';
import 'react-native-reanimated';
import { NativeWindStyleSheet } from 'nativewind';
import { useLoadMainData } from '@/hooks/useLoadMainData';
import { useThemeColor } from '@/hooks/useThemeColor';
import { OnboardingProvider } from '@/context/onboarding';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function RootLayout() {
  const isLoaded = useLoadMainData();
  useThemeColor();

  if (!isLoaded) {
    return null;
  }

  return (
    <OnboardingProvider>
      <Slot />
    </OnboardingProvider>
  );
}
