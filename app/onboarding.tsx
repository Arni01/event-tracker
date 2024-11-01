import { StatusBar } from 'expo-status-bar';
import { router, Stack } from 'expo-router';
import { WelcomeOnboarding } from '@/feature/onboarding';
import { useOnboardingContext } from '@/entities/onboarding';

export default function OnboardingPage() {
  const { closeOnboarding } = useOnboardingContext();

  const handlePress = () => {
    closeOnboarding();
    router.replace('/(quest)/question');
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <StatusBar hidden={true} />
      <WelcomeOnboarding onPress={handlePress} />
    </>
  );
}
