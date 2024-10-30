import { QuestFeature } from '@/feature/quest';
import { useRouter } from 'expo-router';

export default function Question() {
  const router = useRouter();

  return (
    <QuestFeature
      onSuccess={() => router.replace('/(quest)/success')}
    ></QuestFeature>
  );
}
