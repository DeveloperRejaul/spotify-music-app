import '@/global.css';
import 'react-native-reanimated';
import * as SplashScreen from 'expo-splash-screen';
import Toast from 'react-native-toast-message';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { MusicProvider } from '@/src/core/context/musicContext';
import { UserProvider } from '@/src/core/context/UserContext';

SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <UserProvider>
      <MusicProvider>
        <Stack screenOptions={{ headerShown: false}}>
          <Stack.Screen name='index' />
          <Stack.Screen
            name='(stack)'
            options={{ animation: 'slide_from_bottom', presentation: 'modal' }}
          />
          <Stack.Screen name='(tab)' />
        </Stack>
        <Toast />
      </MusicProvider>
    </UserProvider>
  );
}
