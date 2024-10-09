import { Redirect, Stack } from 'expo-router';
// import { NativeWindStyleSheet } from 'nativewind';
import { useGlobalContext } from '@/context/GlobalProvider';
import { useThemeColor } from '@/hooks/useThemeColor';

// NativeWindStyleSheet.setOutput({
//   default: 'native',
// });

// export const unstable_settings = {
//   // Ensure any route can link back to `/`
//   initialRouteName: 'index',
// };

export default function RootLayout() {
  const { isActiveOnboarding } = useGlobalContext();
  const { primary, white } = useThemeColor();

  if (isActiveOnboarding) {
    return <Redirect href="/onboarding" />;
  }

  return (
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
      <Stack.Screen name="second_question" options={{ headerShown: false }} />
      <Stack.Screen name="third_question" options={{ headerShown: false }} />
      <Stack.Screen name="fourth_question" options={{ headerShown: false }} />
      <Stack.Screen name="final_question" options={{ headerShown: false }} />
      {/* <Stack.Screen
          name="scanner"
          options={{
            headerShown: false,
          }}
        /> */}
    </Stack>
  );
}
