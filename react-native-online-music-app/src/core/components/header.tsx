import { View, Text } from 'react-native';
import React from 'react';
import ArrowLeft from '../../assets/icons/arrow-left';
import { colors } from '../constants/colors';
import { useRouter } from 'expo-router';

interface HeaderProps { 
  title: string
}


export default function Header(props: HeaderProps) {
  const router = useRouter();
  return (
    <View className='pt-14 pb-2 flex-row justify-between items-center'>
      <ArrowLeft
        color={colors.light[100]}
        size={30}
        onPress={() => router.back()}
      />
      <Text
        className='text-light-100 font-bold text-2xl'
      >
        {props.title}
      </Text>
      <Text />
    </View> 
  );
}