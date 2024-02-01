import { Text } from 'react-native'

export default function CustomText({ children }) {
  return (
    <Text
      style={{
        fontFamily: 'Montserrat-Regular',
      }}
    >
      {children}
    </Text>
  )
}
