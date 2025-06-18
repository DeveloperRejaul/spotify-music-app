import React from 'react';
import Logo from '@/src/assets/icons/Logo';
import { Pressable, Text, View } from 'react-native';
import { colors } from '@/src/core/constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function Main( ) {
  const router = useRouter();
  return (
    <LinearGradient
      colors={[
        colors.dark[100],
        colors.dark[100],
        colors.dark[500],
        colors.dark[600],
      ]}
      className='container center !justify-evenly'
    >
      <Logo
        color={colors.light[100]}
        outline={colors.dark[700]}
        height={90}
        width={90}
      />

      <View className='w-full gap-y-1'>
        <Text className='title'>Millions of songs.</Text>
        <Text className='title'>Free on Spotify.</Text>
      </View>

      <View className='w-full gap-y-3'>
        <Pressable onPress={() => router.push('/auth/signup')} className='btn'>
          <Text className='btn-text'>Sign up for free</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            router.push('/auth/login');
          }}
          className='btn !bg-transparent'
        >
          <Text className='btn-text'>Login</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}
