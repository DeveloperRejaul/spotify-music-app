import { FlatList, Image, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import useFetch from '@/src/core/hooks/useFetch';
import { useUser } from '@/src/core/context/UserContext';
import { IMusicData } from '../types';
import { BASE_URL } from '@/src/core/constants/const';
import { useFocusEffect } from 'expo-router';

export default function Favorite() {
  const { Get, data} = useFetch<IMusicData[]>();
  const { user } = useUser();
    
  useFocusEffect(useCallback(() => { 
    (async () => { 
      if(!user) return 'user not found';
      await Get({endPoint:`favorite/user/${user.id}`});
    })();
  },[])); 
    

  return (
    <View className='container pt-14'>
      <FlatList
        data={data}
        renderItem={({item }) => {
          return (
            <View className='flex-row mb-4'>
              <Image
                className='rounded-full'
                source={{uri: `${BASE_URL}/file/${item.image}` }}
                style={{
                  height: 70,
                  width: 70,
                }}
              />
              <View className='pl-3 justify-center pr-5'>
                <Text
                  numberOfLines={2}
                  className='text-light-100 font-bold'
                >
                  {item.title}
                </Text>
                <Text className='text-light-800'>{item.name}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}