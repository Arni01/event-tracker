import { Stack } from 'expo-router';
import { useThemeColor } from '@/hooks/useThemeColor';
import { QuestProvider } from '@/entities/quest';

export default function QuestLayout() {
  const { primary, white } = useThemeColor();

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
        }}
      >
        <Stack.Screen name="question" options={{ headerShown: false }} />
        <Stack.Screen name="success" options={{ headerShown: false }} />
        <Stack.Screen name="final" options={{ headerShown: false }} />
      </Stack>
    </QuestProvider>
  );
}
