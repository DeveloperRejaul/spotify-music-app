import { useState } from 'react';
import { GetParams, PostParams } from './types';
import { BASE_URL } from '../constants/const';


export default <T,>() => { 
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
    

  /**
   * @description handle all get requests 
   * @param params 
  */
  const Get = async (params?: GetParams) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/${params?.endPoint}`, {
        headers: params?.token ? { 'Authorization': params?.token } : {}
      });
      const result = await response.json();
      setData(result);
      setIsLoading(false);
      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };
    
  /**
   * @description handle all post requests 
   * @param params 
  */
  const Post = async (params?: PostParams) => { 
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/${params?.endPoint}`, {
        method: 'POST',
        body: params?.body,
        headers: {
          'Content-Type': params?.['Content-type'] || 'application/json',
          'Accept': 'application/json',
        }
      });
      const result = await response.json();
      setData(result);
      setIsSuccess(true);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };
    


    
  const Put = () => { };
  const Delete = () => { };
  return {Get, Post, Put, Delete, isLoading, isError, data, isSuccess};
};