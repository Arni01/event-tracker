import { ImageURISource, View, ViewToken } from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import { FC, useCallback } from 'react';
import ListItem from '@/components/onboarding/ListItem';
import { PaginationElement } from '@/components/onboarding/PaginationComponent';
import { OnboardingButton } from '@/components/onboarding/Button';
import { DataModel } from './DataModel';

interface OnboardingProps {
  data: DataModel[];
  onPress: () => void;
}

export const OnboardingComponent: FC<OnboardingProps> = ({ data, onPress }) => {
  const xPosition = useSharedValue(0);
  const flatListIndex = useSharedValue(0);
  const flatListRef = useAnimatedRef<Animated.FlatList<DataModel>>();

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      flatListIndex.value = viewableItems[0].index ?? 0;
    },
    []
  );

  const scrollHandle = useAnimatedScrollHandler({
    onScroll: (event) => {
      xPosition.value = event.contentOffset.x;
    },
  });

  const renderItem = useCallback(
    ({ item, index }: { item: DataModel; index: number }) => {
      return <ListItem item={item} index={index} x={xPosition} />;
    },
    [xPosition]
  );

  const isLastItem = useDerivedValue(() => {
    console.log('isLastItem', flatListIndex.value, data.length - 1);

    return flatListIndex.value === data.length - 1;
  });

  const handlePress = useCallback(() => {
    if (isLastItem.value) {
      runOnJS(onPress)();
    } else {
      flatListRef?.current?.scrollToIndex({
        index: flatListIndex.value + 1,
      });
    }
  }, []);

  return (
    <>
      <Animated.FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        onScroll={scrollHandle}
        onViewableItemsChanged={onViewableItemsChanged}
        scrollEventThrottle={16}
        pagingEnabled={true}
        horizontal
        bounces={false}
        keyExtractor={({ id }) => id}
        showsHorizontalScrollIndicator={false}
      ></Animated.FlatList>

      <View className="flex-row justify-between items-center p-4">
        <PaginationElement length={data.length} x={xPosition} />
        <OnboardingButton isLast={isLastItem} onPress={handlePress} />
      </View>
    </>
  );
};
