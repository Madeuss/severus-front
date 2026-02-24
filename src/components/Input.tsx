import {
  TextInput,
  View,
  Text,
  TextInputProps,
  TouchableOpacity,
} from 'react-native'
import { LucideIcon } from 'lucide-react-native'

interface InputProps extends TextInputProps {
  label: string
  iconLeft?: LucideIcon
  iconRight?: LucideIcon
  onPressIcon?: () => void // Útil para alternar visibilidade de senha
}

export function Input({
  label,
  iconLeft: IconLeft,
  iconRight: IconRight,
  onPressIcon,
  ...rest
}: InputProps) {
  return (
    <View className="w-full mb-4">
      <Text className="text-slate-400 mb-2 ml-1 font-medium">{label}</Text>

      <View className="flex-row items-center bg-slate-800 rounded-2xl border border-slate-700 focus:border-emerald-500 px-4">
        {IconLeft && (
          <IconLeft color="#64748b" size={20} style={{ marginRight: 8 }} />
        )}

        <TextInput
          className="flex-1 text-white py-4"
          placeholderTextColor="#64748b"
          {...rest}
        />

        {IconRight && (
          <TouchableOpacity
            onPress={onPressIcon}
            disabled={!onPressIcon}
            style={{
              padding: 4,
            }}
          >
            <IconRight color="#64748b" size={20} style={{}} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}
