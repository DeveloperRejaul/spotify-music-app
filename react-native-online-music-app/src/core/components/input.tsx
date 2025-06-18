
import React from 'react';
import { Controller } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';



interface InputProps { 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  name: string;
  placeholder?: string;
  label?: string
  error?: string
  required?: boolean
  className?: string
}



export default function Input(props: InputProps) {
  return (
    <View className={props.className}>
      {props?.label && <Text className='text-light-200 text-xl font-bold mb-2'>{props?.label}</Text>}
      <Controller
        control={props.control}
        rules={{ required: props.required || true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={props?.placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            className='bg-light-600 rounded-xl  py-4 px-4 text-xl w-full'
          />
        )}
        name={props.name}
      />
      { props?.error && <Text className='text-error-400 mb-2'>{ props?.error}</Text>}
    </View>
  );
}