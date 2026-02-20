import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className="bg-emerald-600 p-4 rounded-xl active:bg-emerald-700"
      {...rest}
    >
      <Text className="text-white text-center font-bold text-lg">{title}</Text>
    </TouchableOpacity>
  )
}
