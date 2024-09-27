import { FC } from 'react';
import {
  ActivityIndicator,
  Pressable,
  Text,
  TouchableOpacity,
} from 'react-native';

interface CustomButtonProps {
  title: string;
  handlePress: () => void;
  containerClass?: string;
  textStyles?: string;
  loading?: boolean;
  disabled?: boolean;
}

export const CustomButton: FC<CustomButtonProps> = ({
  title,
  handlePress,
  containerClass,
  textStyles,
  loading,
  disabled,
}) => {
  return (
    <Pressable
      onPress={() => handlePress()}
      // activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] w-full flex-row justify-center items-center ${containerClass} ${
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
