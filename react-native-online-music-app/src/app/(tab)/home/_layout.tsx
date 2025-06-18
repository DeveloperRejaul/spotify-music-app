import { Stack } from 'expo-router';

export default () => (
  <Stack
    screenOptions={{
      headerShown: false,
      animation: 'fade_from_bottom',
    }}
  />
);