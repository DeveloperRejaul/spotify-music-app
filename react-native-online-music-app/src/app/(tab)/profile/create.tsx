/* eslint-disable @typescript-eslint/no-explicit-any */
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as documentPicker from 'expo-document-picker';
import { useForm } from 'react-hook-form';
import Header from '@/src/core/components/header';
import Input from '@/src/core/components/input';
import ColorPicker from '@/src/core/components/color-picker';
import { colors } from '@/src/core/constants/colors';
import { Audio } from 'expo-av';
import Play from '@/src/assets/icons/play';
import Pause from '@/src/assets/icons/pause';
import Button from '@/src/core/components/Button';
import useFetch from '@/src/core/hooks/useFetch';


export default function Create() {
  const { control, handleSubmit } = useForm();
  const { Post,isLoading, } = useFetch();

  const [image, setImage] = useState<documentPicker.DocumentPickerAsset | null>(null);
  const [audio, setAudio] = useState<documentPicker.DocumentPickerAsset | null>(null);
  const [color, setColor] = useState<string | null>(null);


  const [sound, setSound] = useState<Audio.Sound>();
  const [isPlaying , setIsPlaying] = useState(false);
  
  const handleImageSelect = async () => {
    const file = await documentPicker.getDocumentAsync({ type: 'image/*' }); 
    if (!file.canceled) setImage(file.assets[0]);
  };


  // handle audio music
  const handleAudioSelect = async () => {
    const file = await documentPicker.getDocumentAsync({ type: 'audio/*' });
    if (!file.canceled) setAudio(file?.assets[0]);
  };

  async function playSound() {
    if (audio && !sound) {
      setIsPlaying(true);
      const { sound } = await Audio.Sound.createAsync(audio);
      setSound(sound);
      await sound.playAsync();
    } 

    if (sound) {
      setIsPlaying(true);
      await sound.playAsync();
    }
  }


  const handleUploadMusic = async (data: any) => { 

    const title = data.title as string;
    const name = data.name as string;
    if (title && name && audio && image && color) {
      const formData = new FormData();
      
      formData.append('file', {
        uri: audio.uri,
        name: `${Date.now()}.${audio?.name.split('.').pop()}`, 
        type: audio?.mimeType 
      } as any);



      formData.append('file', {
        uri: image.uri,
        name: `${Date.now()}.${image.name.split('.').pop()}`, 
        type: image?.mimeType 
      } as any);
      
      formData.append('color', color);
      formData.append('name', name);
      formData.append('title', title);
      
      await Post({ endPoint: 'music', 'Content-type':'multipart/form-data', body: formData});
    } else {
      console.log('From felid is missing');
    }
  };


  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  useEffect(() => {
    const init = async () => {};
    init();
  }, [sound]);
  


  return (
    <View className='container'>
      <Header title='Create Music' />
      <ScrollView>
        <View className='flex-1 center w-full' style={{rowGap:10 ,paddingBottom : 50} }>
          <Input name='name' control={control} className='w-full' label='Name' placeholder='Enter your song name' />
          <Input name='title' control={control} className='w-full' label='Title' placeholder='Enter song title' />
          
          <Text className='text-light-100 font-bold w-full text-xl mt-1'>Select Image</Text>
          {image?.uri ?
            <Image
              className='rounded-lg'
              resizeMode='cover'
              style={{height: 100, width: '100%' }}
              source={{ uri: image.uri as string }}
            /> :
            <Pressable onPress={handleImageSelect}
              style={{ height: 100, width: '100%', backgroundColor: colors.light[600] }}
              className='rounded-lg'
            />
          }
          <Text className='text-light-100 font-bold w-full text-xl mt-1'>Select Music</Text>
          {audio ?
            <View
              className='rounded-lg bg-light-600 justify-center'
              style={{height: 100, width: '100%' }}
            >
              {
                isPlaying ?
                  <Pause color={colors.light[100]}
                    onPress={() => {
                      setIsPlaying(false);
                      if (sound) sound.pauseAsync();
                    }}
                  /> :
                  <Play
                    color={colors.light[100]}
                    outline={colors.light[100]}
                    onPress={playSound}
                  />
              }
            </View> : 
            <Pressable
              onPress={handleAudioSelect}
              style={{ height: 100, width: '100%', backgroundColor: colors.light[600] }}
              className='rounded-lg'
            />
          }
          <ColorPicker onSelect={(value)=>setColor(value.hex)
          }
          />

          <Button text={ isLoading ? 'Loading...' :'Create Music '} className='w-full' onPress={handleSubmit(handleUploadMusic)} />
        </View>
      </ScrollView>
    </View>
  );
}