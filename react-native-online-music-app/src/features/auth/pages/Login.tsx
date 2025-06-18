import { View, Text, Pressable } from 'react-native';
import React, { useEffect } from 'react';
import Logo from '@/src/assets/icons/Logo';
import { useForm } from 'react-hook-form';
import Input from '@/src/core/components/input';
import { useRouter } from 'expo-router';
import useFetch from '@/src/core/hooks/useFetch';
import { tost } from '@/src/core/utils/toast'; 
import { store } from '@/src/core/utils/store';
import type{ DataType, InputDataLogin } from '../types';


export default function Login() {
  const router = useRouter();
  const { Post, data, isLoading, isSuccess} = useFetch<DataType>();
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { email: '', password: '' }
  });
  
  useEffect(() => {
    const init = async () => {
      if (isSuccess && data) { 
        await store.save('access_token', data.access_token);
        tost({message:'You have successfully login'});
        router.replace('(tab)/home');
      }  
    };
    init();
  }, [isSuccess, data]);
  
  const handleInput = async (data: InputDataLogin) => { 
    await Post({endPoint:'user/login', body: JSON.stringify(data)});
  }; 



  return (
    <View className='container center gap-y-10'>
      <View className='center gap-y-2'>
        <Logo />
        <Text className='title'>Welcome to Spotify</Text>
      </View>
      <View className='w-full gap-y-4'>

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
        <Pressable
          disabled={isLoading}
          onPress={handleSubmit(handleInput)}
          className='btn !rounded-xl'
        >
          <Text className='btn-text'>{ isLoading ? 'Loading..' :' Login'}</Text>
        </Pressable>
      </View>
    </View>
  );
}
