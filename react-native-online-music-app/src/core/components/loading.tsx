import { View, ActivityIndicator , } from 'react-native';
import React from 'react';

export default function Loading() {
  return (
    <View className='container center'>
      <ActivityIndicator size={70} />
    </View>
  );
}