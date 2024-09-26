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
  const [right, setRight] = useState(50);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  return (
    <ThemedSafeAreaView
    // style={StyleSheet.absoluteFillObject}
    >
      <CustomButton
        handlePress={() => setIsVisible(true)}
        title="Open modal"
        containerStyles="w-full mt-4"
        textStyles="text-white"
      ></CustomButton>
      <CustomButton
        handlePress={() => router.back()}
        title="Back"
        containerStyles="w-full mt-4"
        textStyles="text-white"
      ></CustomButton>
      <CustomButton
        handlePress={() => router.back()}
        title="Back"
        containerStyles="w-full mt-4"
        textStyles="text-white"
      ></CustomButton>

      {/* <Stack.Screen
        options={{
          title: 'Scan a code',
          headerBlurEffect: 'systemMaterial',
          // headerLeft: () => (
          //   <Ionicons
          //     name={backIcon}
          //     size={25}
          //     color="white"
          //     onPress={() => router.dismissAll()}
          //   />
          // ),
        }}
      /> */}

      <Animated.View
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
                  // right: right,
                  top: top,
                  width: width,
                  height: height,
                }}
              />

              <CameraView
                // style={StyleSheet.absoluteFillObject}
                className="w-full h-full"
                facing="back"
                mode="picture"
                ratio="16:9"
                barcodeScannerSettings={{
                  barcodeTypes: ['qr', 'code128'],
                }}
                onBarcodeScanned={(result) => {
                  const { data, cornerPoints, boundingBox } =
                    result as unknown as BarcodeScanningResult;
                  const innerDimension = 300;
                  const xHole = SCREEN_WIDTH / 2 - innerDimension / 2;
                  const yHole = SCREEN_HEIGHT / 2 - innerDimension / 2;

                  if (data && !qrLock.current) {
                    setTop(boundingBox.origin.x);
                    setLeft(
                      SCREEN_WIDTH -
                        boundingBox.origin.y -
                        boundingBox.size.height
                    );
                    // setRight(boundingBox.origin.y);
                    setWidth(boundingBox.size.height);
                    setHeight(boundingBox.size.width);
                    // const xMin = Math.min(...cornerPoints.map((p) => p.x));
                    // const xMax = Math.max(...cornerPoints.map((p) => p.x));
                    // const yMin = Math.min(...cornerPoints.map((p) => p.y));
                    // const yMax = Math.max(...cornerPoints.map((p) => p.y));
                    // setLeft(xMin);
                    // setTop(yMin);
                    // setWidth(xMax - xMin);
                    // setHeight(yMax - yMin);

                    // setLeft(cornerPoints[0].x);
                    // setTop(cornerPoints[0].y);
                    // setWidth(cornerPoints[1].x - cornerPoints[0].x);
                    // setHeight(cornerPoints[2].y - cornerPoints[1].y);

                    // console.log('POINTS', cornerPoints, 'BOUND', boundingBox);

                    // const barcodeBounds = {
                    //   height: boundingBox.size.width,
                    //   width: boundingBox.size.height,
                    //   left:
                    //     SCREEN_WIDTH -
                    //     boundingBox.origin.y -
                    //     boundingBox.size.height,
                    //   top: boundingBox.origin.x,
                    // };

                    // setTop(barcodeBounds.left);
                    // setLeft(barcodeBounds.top);
                    // setWidth(barcodeBounds.width);
                    // setHeight(barcodeBounds.height);
                    // console.log(barcodeBounds);

                    if (
                      left > xHole &&
                      left + width < xHole + innerDimension &&
                      top > yHole &&
                      top + height < yHole + innerDimension
                    ) {
                      console.log(result);
                    }

                    // qrLock.current = true;
                    // setTimeout(async () => {
                    //   await Linking.openURL(data);
                    // }, 500);
                  }
                }}
              >
                {Platform.OS !== 'web' && <Overlay />}
              </CameraView>
            </View>
          </View>
        )}
      </Animated.View>
    </ThemedSafeAreaView>
  );
}
