import Favorite from '@/src/assets/icons/favorite';
import Home from '@/src/assets/icons/Home';
import Profile from '@/src/assets/icons/Profile';
import { colors } from '@/src/core/constants/colors';
import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default () => (
  <Tabs
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        height: 65,
        backgroundColor:colors.dark[600]
      },
      tabBarActiveTintColor: colors.light[200],
      tabBarInactiveTintColor:colors.light[700]
    }}
    initialRouteName='home'
  >
    <Tabs.Screen
      name='home'
      options={{
        tabBarIcon: ({ color, size }) => (
          <Home
            color={color}
            height={size}
            width={size}
          />
        ),
        tabBarLabel: ({ color }) => (
          <Text
            style={{ color }}
            className='font-bold mb-3'
          >
            Home
          </Text>
        ),
      }}
    />
    <Tabs.Screen
      name='favorite'
      options={{
        tabBarIcon: ({ color, size }) => (
          <Favorite
            color={color}
            height={size}
            width={size}
          />
        ),
        tabBarLabel: ({ color }) => (
          <Text
            style={{ color }}
            className='font-bold mb-3'
          >
            Favorite
          </Text>
        ),
      }}
    />
    <Tabs.Screen
      name='profile'
      options={{
        tabBarIcon: ({ color, size }) => (
          <Profile
            color={color}
            size={size}
          />
        ),
        tabBarLabel: ({ color }) => (
          <Text
            style={{ color }}
            className='font-bold mb-3'
          >
            Profile
          </Text>
        ),
      }}
    />
  </Tabs>
);