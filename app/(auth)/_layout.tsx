import { MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import colors from '~/colors'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveBackgroundColor: colors.primary.main,
        tabBarActiveTintColor: colors.neutral[100],
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          borderRadius: 12,
          marginVertical: 14,
        },
        tabBarStyle: {
          backgroundColor: colors.neutral[600],
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          height: 104,
          paddingBottom: 0,
        },
      }}
    >
      <Tabs.Screen
        name="groups"
        options={{
          tabBarIcon: () => <MaterialIcons name="groups" size={28} color={colors.neutral[200]} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="mark-chat-unread" size={28} color={colors.neutral[200]} />
          ),
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="add-to-queue" size={28} color={colors.neutral[200]} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="notifications" size={28} color={colors.neutral[200]} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="account-circle" size={28} color={colors.neutral[200]} />
          ),
        }}
      />
    </Tabs>
  )
}
