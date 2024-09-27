import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView';
import { Stack } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

export default function Helper() {
  return (
    <ThemedSafeAreaView style={StyleSheet.absoluteFillObject}>
      <Stack.Screen
        options={{
          title: 'Hint',
          headerBlurEffect: 'systemMaterial',
        }}
      />
      <Text>Test helper</Text>
    </ThemedSafeAreaView>
  );
}
