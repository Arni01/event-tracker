import { Audio, AVPlaybackSource } from 'expo-av';
import { useEffect, useState } from 'react';
import { ImageURISource, View } from 'react-native';
import { MediaButton } from '../MediaButton';
import { ImageComponent } from './ImageComponent';

interface AudioComponentProps {
  audioSource: AVPlaybackSource;
  imageSource?: ImageURISource;
}

export function AudioComponent({
  audioSource,
  imageSource,
}: AudioComponentProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [audio, setAudio] = useState<Audio.Sound | null>(null);

  useEffect(() => {
    loadAudio();
  }, []);

  useEffect(
    () => () => {
      audio?.unloadAsync();
    },
    [audio]
  );

  return (
    <View className="flex-1 justify-center items-center" style={{ gap: 12 }}>
      {imageSource && <ImageComponent imageSource={imageSource} />}

      <View
        className="flex-row justify-center items-center"
        style={{ gap: 12 }}
      >
        <MediaButton onPress={replayAudio} type="replay" />
        {isPlaying ? (
          <MediaButton onPress={pauseAudio} type="pause" />
        ) : (
          <MediaButton onPress={playAudio} type="play" />
        )}
      </View>
    </View>
  );

  function playAudio() {
    if (isFinished) {
      replayAudio();
    } else {
      audio?.playAsync();
    }
  }

  function replayAudio() {
    audio?.replayAsync();
  }

  function pauseAudio() {
    audio?.pauseAsync();
  }

  async function loadAudio() {
    const { sound } = await Audio.Sound.createAsync(
      audioSource,
      {
        shouldPlay: true,
      },
      (status) => {
        if (status.isLoaded) {
          if (status.isPlaying) {
            setIsPlaying(true);
          } else {
            setIsPlaying(false);
          }
          if (status.didJustFinish && !status.isLooping) {
            setIsFinished(true);
          } else {
            setIsFinished(false);
          }
        }
      }
    );

    setAudio(sound);
  }
}
