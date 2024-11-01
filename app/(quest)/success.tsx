import { useRouter } from 'expo-router';
import { SuccessFeature } from '@/feature/success';
import { useQuestState } from '@/entities/quest';

export default function Success() {
  const router = useRouter();
  const { iFinalQuestionPass } = useQuestState();

  return (
    <SuccessFeature
      onNext={() =>
        router.replace(
          iFinalQuestionPass ? '/(quest)/final' : '/(quest)/question'
        )
      }
    ></SuccessFeature>
  );
}
{
  /* <View className="w-full justify-center items-center pt-3" style={{ gap: 20 }}>
  <CustomButton
    onPress={}
    title="Success"
    // containerClass="mb-4"
  ></CustomButton>

  {/* <CustomButton
  handlePress={() => router.push('/helper')}
  title="Helper"
></CustomButton> */
}

{
  /* <CustomButton
  handlePress={nextQuestion}
  title="Second question"
></CustomButton> */
}
// </View>; */}
