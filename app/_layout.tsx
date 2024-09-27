import { Slot } from 'expo-router';
import 'react-native-reanimated';
import { NativeWindStyleSheet } from 'nativewind';
import GlobalProvider from '../context/GlobalProvider';
import { useLoadMainData } from '@/hooks/useLoadMainData';
import { useThemeColor } from '@/hooks/useThemeColor';

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
    <GlobalProvider>
      <Slot />
    </GlobalProvider>
  );
}
