import { useWindowDimensions, ViewToken } from 'react-native';
import Animated, { SlideInRight, SlideOutLeft } from 'react-native-reanimated';
import { useHintStore } from '@/feature/quest/model/hint/useHintStore';
import { useCallback, useState } from 'react';
import { HintItem } from '@/feature/quest/component/hint/HintItem';
import { HintModel } from '@/feature/quest/model/hint/HintModel';

interface HintListProps {
  onSuccess: () => void;
}

export function HintList({ onSuccess }: HintListProps) {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const data = useHintStore((state) => state.data);
  const [visibleItemId, setVisibleItemId] = useState(data[0]?.id);

  const moveHintToEnd = useHintStore((state) => state.moveHintToEnd);
  const passHint = useHintStore((state) => state.passHint);

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

  function handleSuccess(itemId: string) {
    onSuccess();
    setTimeout(() => {
      passHint(itemId);
    }, 300);
  }

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
            onError={() => moveHintToEnd(item.id)}
            onSuccess={() => handleSuccess(item.id)}
          />
        )}
      </Animated.View>
    );
  }
}
