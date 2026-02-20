import { TextInput, View, Text, TextInputProps } from 'react-native'

interface InputProps extends TextInputProps {
  label: string
}

export function Input({ label, ...rest }: InputProps) {
  return (
    <View className="w-full mb-4">
      <Text className="text-slate-400 mb-2 ml-1 font-medium">{label}</Text>
      <TextInput
        className="bg-slate-800 text-white p-4 rounded-2xl border border-slate-700 focus:border-emerald-500"
        placeholderTextColor="#64748b"
        {...rest}
      />
    </View>
  )
}
