import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/shared/component/ThemedText';
import { ThemedSafeAreaView } from '@/shared/component/ThemedSafeAreaView';

export default function Home() {
  return (
    <ThemedSafeAreaView style={styles.container}>
      <ThemedText>Edit app/index.tsx to edit this screen.</ThemedText>
      <Link href="/question">
        <ThemedText style={[styles.buttonStyle]}>Start</ThemedText>
      </Link>
      {/* <Stack.Screen options={{ title: 'Intro', headerShown: false }} />
      <ThemedText style={styles.title}>QR Code Scanner</ThemedText>
      <ThemedView style={{ gap: 20 }}>
        <Pressable onPress={requestPermission}>
          <ThemedText style={styles.buttonStyle}>
            Request Permissions
          </ThemedText>
        </Pressable>

        <Pressable disabled={!isPermissionGranted}>
          <Link href="/question">
            <ThemedText
              style={[
                styles.buttonStyle,
                { opacity: !isPermissionGranted ? 0.5 : 1 },
              ]}
            >
              Start
            </ThemedText>
          </Link>
        </Pressable>
      </ThemedView> */}
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 80,
  },
  title: {
    fontSize: 40,
    lineHeight: 40,
  },
  buttonStyle: {
    color: '#0E7AFE',
    fontSize: 20,
    textAlign: 'center',
  },
});
