import { MediaButton } from '../MediaButton';
import { AVPlaybackSource, AVPlaybackStatus, ResizeMode, Video } from 'expo-av';
import { useRef, useState } from 'react';
import { View } from 'react-native';

interface VideoComponentProps {
  videoSource: AVPlaybackSource;
}

export function VideoComponent({ videoSource }: VideoComponentProps) {
  const video = useRef<Video>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  return (
    <View className="flex-1 justify-center items-center">
      <Video
        ref={video}
        source={videoSource}
        className="w-full aspect-[1/1] rounded-xl"
        useNativeControls
        resizeMode={ResizeMode.COVER}
        shouldPlay
        // isLooping
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
      />
      <View className="flex-row justify-center items-center">
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
      video.current?.playAsync();
    }
  }

  function replayAudio() {
    video.current?.replayAsync();
  }

  function pauseAudio() {
    video.current?.pauseAsync();
  }

  function handlePlaybackStatusUpdate(status: AVPlaybackStatus) {
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
}
