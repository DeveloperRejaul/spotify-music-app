import { View, Text, Image } from 'react-native';
import React from 'react';
import img from '@/src/assets/images/demo.jpg';
import Button from '@/src/core/components/Button';
import { useRouter } from 'expo-router';

export default function Profile() {
  const router = useRouter();
  return (
    <View className='container pt-14'>
      <View className='bg-success-300/10 rounded-lg px-2 py-5 flex-row'>
        <Image
          style={{height:120, width:120}}
          source={img}
          className='rounded-full'
        />
        <View className='pl-7 pt-5'>
          <Text className='text-light-100 text-2xl font-bold mb-3'>{'Jhon Deo'}</Text>
          <Button text='Create Music' onPress={()=> router.push('(tab)/profile/create')} />
        </View>
      </View>
    </View>
  );
}