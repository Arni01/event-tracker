import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { useCameraPermissions } from 'expo-camera';
import { NativeWindStyleSheet } from 'nativewind';
import GlobalProvider from '../context/GlobalProvider';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Text } from 'react-native';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { primary, white } = useThemeColor();
  const [permission, requestPermission] = useCameraPermissions();

  const isPermissionGranted = Boolean(permission?.granted);

  if (!isPermissionGranted) {
    requestPermission();
  }

  const [fontsLoaded, error] = useFonts({
    'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraLight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Thin': require('../assets/fonts/Poppins-Thin.ttf'),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <GlobalProvider>
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: primary,
          },
          headerStyle: {
            backgroundColor: primary,
          },
          headerTintColor: white.DEFAULT,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="first_question" options={{ headerShown: false }} />
        <Stack.Screen name="second_question" options={{ headerShown: false }} />
        <Stack.Screen name="third_question" options={{ headerShown: false }} />
        <Stack.Screen name="fourth_question" options={{ headerShown: false }} />
        <Stack.Screen name="final_question" options={{ headerShown: false }} />
        <Stack.Screen
          name="scanner"
          options={{
            presentation: 'transparentModal',
            animation: 'slide_from_right',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="helper"
          options={{
            presentation: 'transparentModal',
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </GlobalProvider>
  );
}
