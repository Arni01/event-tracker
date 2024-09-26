import { FC } from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  loading?: boolean;
  disabled?: boolean;
}

export const CustomButton: FC<CustomButtonProps> = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  loading,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={() => handlePress()}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
        loading ? 'opacity-50' : ''
      }`}
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
    </TouchableOpacity>
  );
};
