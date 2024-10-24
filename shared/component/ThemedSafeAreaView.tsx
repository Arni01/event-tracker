import {
  SafeAreaView,
  type SafeAreaViewProps,
} from 'react-native-safe-area-context';

export function ThemedSafeAreaView({
  className,
  ...otherProps
}: SafeAreaViewProps) {
  return (
    <SafeAreaView
      className={`bg-primary h-full ${className}`}
      {...otherProps}
    />
  );
}
