import AsyncStorage from '@react-native-async-storage/async-storage'

const useStorage = () => {
  const getItem = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key)
      return value ? JSON.parse(value) : null
    } catch (error) {
      console.log('Error retrieving item', error)
      return null
    }
  }

  const saveItem = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log('Error saving item', error)
    }
  }

  const removeItem = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch (error) {
      console.log('Error removing item', error)
    }
  }

  return {
    getItem,
    saveItem,
    removeItem,
  }
}

export default useStorage
