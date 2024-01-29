import LoginIllustration from 'assets/login-illustration.svg'
import { Text, View } from 'react-native'

export default function Login() {
  return (
    <View className={styles.container}>
      <Text>Severus</Text>
      <LoginIllustration width="100%" height="70%" />
    </View>
  )
}

const styles = {
  container: `items-center flex-1 justify-center`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
}
