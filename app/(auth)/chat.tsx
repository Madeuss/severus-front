import { Text, View } from 'react-native'

export default function TabOneScreen() {
  return (
    <View className={styles.container}>
      <Text className={styles.title}>Chat</Text>
    </View>
  )
}

const styles = {
  container: `items-center flex-1 justify-center`,
  title: `text-xl font-bold`,
}
