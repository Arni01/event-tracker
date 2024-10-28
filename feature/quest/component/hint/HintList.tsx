import { useWindowDimensions, ViewToken } from 'react-native';
import Animated, { SlideInRight, SlideOutLeft } from 'react-native-reanimated';
import { useCallback, useState } from 'react';
import { HintModel } from '../../model/hint/hintModel';
import { HintItem } from './HintItem';

interface HintListProps {
  onSuccess: (itemId: string) => void;
  onError: (itemId: string) => void;
  data: HintModel[];
}

export function HintList({ onSuccess, data, onError }: HintListProps) {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const [visibleItemId, setVisibleItemId] = useState(data[0]?.id);

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      setVisibleItemId(viewableItems[0].item.id);
    },
    []
  );

  return (
    <Animated.FlatList
      data={data}
      onViewableItemsChanged={onViewableItemsChanged}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false}
      keyExtractor={(item, index) => item.id + '_' + index}
    />
  );

  function renderItem({ item }: { item: HintModel }) {
    return (
      <Animated.View
        key={item.id}
        entering={SlideInRight}
        exiting={SlideOutLeft}
        className="h-full justify-center items-center"
        style={{ width: SCREEN_WIDTH }}
      >
        {visibleItemId === item.id && (
          <HintItem
            item={item}
            onError={() => onError(item.id)}
            onSuccess={() => onSuccess(item.id)}
          />
        )}
      </Animated.View>
    );
  }
}
