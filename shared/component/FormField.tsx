import { useThemeColor } from '@/hooks/useThemeColor';
import { TextInput, View } from 'react-native';

interface FormFieldProps {
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
}

export function FormField({
  onChangeText,
  value,
  placeholder,
}: FormFieldProps) {
  const { white } = useThemeColor();
  return (
    <View className="w-full h-16 px-4 bg-white-900 rounded-2xl border-2  border-white-600 focus:border-accent-200 flex-row items-center">
      <TextInput
        className="flex-1 text-white font-psemibold text-base"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={white[800]}
        inputMode="text"
        enterKeyHint="send"
      />
    </View>
  );
}
