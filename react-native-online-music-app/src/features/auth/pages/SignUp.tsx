import { View, Text, Pressable, ScrollView, useWindowDimensions } from 'react-native';
import React, { useEffect } from 'react';
import Logo from '@/src/assets/icons/Logo';
import { useForm } from 'react-hook-form';
import Input from '@/src/core/components/input';
import useFetch from '@/src/core/hooks/useFetch';
import { useRouter } from 'expo-router';
import { tost } from '@/src/core/utils/toast';
import { InputData } from '../types';

export default function SignUp() {
  const { height } = useWindowDimensions();
  const router = useRouter();
  const { Post, data, isLoading, isSuccess} = useFetch();
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { email: '', password: '', name:'' }
  });
  
 
  const handleInput = async (data: InputData) => { 
    await Post({endPoint:'user', body: JSON.stringify(data)});
  }; 
  
  useEffect(() => { 
    if (isSuccess && data) { 
      tost({message:'You have successfully signed up'});
      router.replace('login');
    }  
  },[isSuccess, data]);

  return (
    <ScrollView>
      <View className='container center gap-y-10' style={{height: height*1.05}}>
        <View className='center gap-y-2'>
          <Logo />
          <Text className='title'>Welcome to Spotify</Text>
        </View>
        <View className='w-full gap-y-4'>

          <Input
            name='name'
            control={control}
            placeholder='Jon Deo'
            label='Name'
            error={errors.email && 'Name must be required'}
          />
          <Input
            name='email'
            control={control}
            placeholder='example@gmail.com'
            label='Email'
            error={errors.email && 'Email must be required'}
          />
          <Input
            label='Password'
            name='password'
            control={control}
            placeholder='********'
            error={errors.password && 'Password must be required'}
          />
          <Pressable onPress={handleSubmit(handleInput)} className='btn !rounded-xl'>
            <Text className='btn-text'>{isLoading ? 'Loading...' : 'Sign up'}</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
