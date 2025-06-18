import React, { useEffect } from 'react';
import { Redirect, useRouter } from 'expo-router';
import { store } from '@/src/core/utils/store';
import useFetch from '@/src/core/hooks/useFetch';
import Loading from '@/src/core/components/loading';
import { useUser } from '@/src/core/context/UserContext';
import { UserType } from '@/src/core/context/types';

export default function Index() {
  const router = useRouter();
  const { addUser} = useUser();
  const { Get, isLoading, isSuccess, isError, data } = useFetch<UserType>();

  useEffect(() => { 
 
    const init = async () => { 
      const token = await store.find('access_token');
      if (token) return await Get({ endPoint: 'user/auth', token });
      router.replace('(stack)');
    };
    init();
  }, []);
 
  useEffect(() => {
    if (data && isSuccess) addUser(data);
  },[data, isSuccess]);
  

  if(isLoading) return <Loading />;
  if(isSuccess) return <Redirect href={'(tab)/home'} />;
  if (isError) return <Redirect href='(stack)' />;
}