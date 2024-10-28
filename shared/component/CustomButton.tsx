import { FC } from 'react';
import { ActivityIndicator, Pressable, Text } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  containerClass?: string;
  textStyles?: string;
  loading?: boolean;
  disabled?: boolean;
}

export const CustomButton: FC<CustomButtonProps> = ({
  title,
  onPress,
  containerClass,
  textStyles,
  loading,
  disabled,
}) => {
  return (
    <Pressable
      onPress={() => onPress()}
      className={`bg-accent rounded-xl min-h-[62px] basis-[62px] flex-shrink-0 w-full flex-row justify-center items-center ${containerClass} ${
        loading ? 'opacity-50' : ''
      }`}
      style={({ pressed }) => ({
        opacity: pressed ? 0.7 : 1,
      })}
      disabled={loading || disabled}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>

      {loading && (
        <ActivityIndicator
          animating={loading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </Pressable>
  );
};
