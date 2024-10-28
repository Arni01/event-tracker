import { CustomButton, ThemedSafeAreaView } from '@/shared/component';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

export default function Success() {
  const router = useRouter();

  return (
    <ThemedSafeAreaView>
      <View
        className="w-full justify-center items-center pt-3"
        style={{ gap: 20 }}
      >
        <CustomButton
          onPress={() => router.replace('/(quest)/question')}
          title="Success"
          // containerClass="mb-4"
        ></CustomButton>

        {/* <CustomButton
          handlePress={() => router.push('/helper')}
          title="Helper"
        ></CustomButton> */}

        {/* <CustomButton
          handlePress={nextQuestion}
          title="Second question"
        ></CustomButton> */}
      </View>
    </ThemedSafeAreaView>
  );
}
