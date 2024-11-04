import { useOnboardingContext } from '@/entities/onboarding';
import { Redirect } from 'expo-router';

export default function HomePage() {
  const { isPassedOnboarding } = useOnboardingContext();

  if (isPassedOnboarding) {
    return <Redirect href="/(quest)/question" />;
    // return <Redirect href="/(quest)/final" />;
    // return <Redirect href="/(quest)/success" />;
  }

  return <Redirect href="/onboarding" />;
}
