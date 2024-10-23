import { useOnboardingContext } from '@/context/onboarding';
import { Redirect } from 'expo-router';

export default function Home() {
  const { isActiveOnboarding } = useOnboardingContext();

  if (isActiveOnboarding) {
    return <Redirect href="/onboarding" />;
  }

  return <Redirect href="/(quest)/question" />;
}
