import { images } from '@/constants';
import { useJokeStore } from '../model/joke/useJokeStore';
import { CustomButton, ThemedSafeAreaView } from '@/shared/component';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { SuccessCart } from './SuccessCart';
import { SuccessLayout } from './SuccessLayout';

enum Status {
  TEXT,
  JOKE,
}

interface SuccessFeatureProps {
  onNext: () => void;
}

export function SuccessFeature({ onNext }: SuccessFeatureProps) {
  const [status, setStatus] = useState<Status>(Status.TEXT);
  const state = useJokeStore((state) => state);

  useEffect(() => {
    if (!state.isInit) {
      state.init();
    }
  }, []);

  const joke = state.data[0];

  return (
    <ThemedSafeAreaView>
      {status === Status.TEXT && (
        <SuccessLayout>
          <SuccessCart.Text text="Meow! Great job! 🎉" />
          <SuccessCart.Image imageSource={images.success.happyCat}>
            <SuccessCart.Text text="You did it like a real cat!" />
          </SuccessCart.Image>
          <CustomButton
            title="Keep it up!"
            onPress={() => setStatus(Status.JOKE)}
          />
        </SuccessLayout>
      )}

      {status === Status.JOKE && (
        <SuccessLayout>
          <SuccessCart.Text text="The joke for your stand-up" />
          <SuccessCart.Image imageSource={images.success.standUp}>
            <View>
              {joke &&
                joke.text.map((item, index) => (
                  <SuccessCart.Text key={index} text={item} />
                ))}
            </View>
          </SuccessCart.Image>
          <CustomButton
            containerClass="mt-4"
            title="Next"
            onPress={handleNext}
          />
        </SuccessLayout>
      )}
    </ThemedSafeAreaView>
  );

  function handleNext() {
    onNext();

    state.passJoke();
  }
}
