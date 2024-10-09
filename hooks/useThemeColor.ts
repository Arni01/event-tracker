/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */
import * as SystemUI from 'expo-system-ui';
import Colors from '@/constants/Colors';

export function useThemeColor() {
  SystemUI.setBackgroundColorAsync(Colors.primary.DEFAULT);

  return Colors;
}
