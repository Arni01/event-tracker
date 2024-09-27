import { BarcodeBounds, BarcodePoint, CameraView } from 'expo-camera';
import { router, Stack, useNavigation } from 'expo-router';
import {
  AppState,
  Modal,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Overlay } from '@/components/Overlay';
import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView';
import { CustomButton } from '@/components/CustomButton';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { ModalComponent } from '@/components/modal/Modal';

interface BarcodeScanningResult {
  boundingBox: BarcodeBounds;
  data: string;
  cornerPoints: BarcodePoint[];
}

export default function Scanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

  const navigation = useNavigation();
  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);

  const rnModalStyle = useAnimatedStyle(() => {
    return {
      opacity: isVisible ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX: isVisible ? withTiming(0) : withTiming(SCREEN_WIDTH),
        },
      ],
    };
  });

  // const backIcon = Platform.OS === 'ios' ? 'chevron-back' : 'arrow-back-sharp';

  // useEffect(() => {
  //   const subscription = AppState.addEventListener('change', (nextAppState) => {
  //     if (
  //       appState.current.match(/inactive|background/) &&
  //       nextAppState === 'active'
  //     ) {
  //       qrLock.current = false;
  //     }
  //     appState.current = nextAppState;
  //   });

  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  const [top, setTop] = useState(50);
  const [left, setLeft] = useState(50);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  return (
    <ThemedSafeAreaView
    // style={StyleSheet.absoluteFillObject}
    >
      <CustomButton
        handlePress={() => setIsVisible(true)}
        title="Open modal"
        containerClass="w-full mt-4"
        textStyles="text-white"
      ></CustomButton>
      <CustomButton
        handlePress={() => router.back()}
        title="Back"
        containerClass="w-full mt-4"
        textStyles="text-white"
      ></CustomButton>
      <CustomButton
        handlePress={() => router.back()}
        title="Back"
        containerClass="w-full mt-4"
        textStyles="text-white"
      ></CustomButton>

      {/* <ModalComponent isVisible={isVisible} onClose={() => setIsVisible(false)}>
        <CameraView
          className="w-full h-full"
          facing="back"
          mode="picture"
          ratio="16:9"
          barcodeScannerSettings={{
            barcodeTypes: ['qr', 'code128'],
          }}
          active={isVisible}
          onBarcodeScanned={(result) => {
            const { data, boundingBox } =
              result as unknown as BarcodeScanningResult;
            const innerDimension = 300;
            const xHole = SCREEN_WIDTH / 2 - innerDimension / 2;
            const yHole = SCREEN_HEIGHT / 2 - innerDimension / 2;

            if (data && !qrLock.current) {
              if (
                left > xHole &&
                left + width < xHole + innerDimension &&
                top > yHole &&
                top + height < yHole + innerDimension
              ) {
                console.log(result);
              }

              setTop(boundingBox.origin.x);
              setLeft(
                SCREEN_WIDTH - boundingBox.origin.y - boundingBox.size.height
              );
              setWidth(boundingBox.size.height);
              setHeight(boundingBox.size.width);

              // qrLock.current = true;
              // setTimeout(async () => {
              //   await Linking.openURL(data);
              // }, 500);
            }
          }}
        >
          {Platform.OS !== 'web' && <Overlay />}
        </CameraView>
      </ModalComponent> */}

      {/* <Animated.View
        className={'bg-primary'}
        style={[StyleSheet.absoluteFillObject, rnModalStyle]}
      >
        {isVisible && (
          <View className="flex-1 relative w-full h-full">
            <View className="absolute top-0 left-0 h-10 flex-row justify-between items-center px-4 z-20">
              <Pressable onPress={() => setIsVisible(false)}>
                <MaterialIcons name="close" color="#fff" size={24} />
              </Pressable>
            </View>
            <View className="flex-1 relative">
              {Platform.OS === 'android' ? <StatusBar hidden /> : null}
              <View
                className="absolute border-red-600 border-2 z-10"
                style={{
                  left: left,
                  top: top,
                  width: width,
                  height: height,
                }}
              />
            </View>
          </View>
        )}
      </Animated.View> */}
    </ThemedSafeAreaView>
  );
}
