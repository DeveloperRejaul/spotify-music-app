import { useMusic } from '@/src/core/context/musicContext';
import { IMusicBottomBarProps } from '../types';
import { useRouter } from 'expo-router';
import { useUser } from '@/src/core/context/UserContext';
import { BASE_URL } from '@/src/core/constants/const';
import { Image, Pressable, Text, View } from 'react-native';
import { colors } from '@/src/core/constants/colors';
import Favorite from '@/src/assets/icons/favorite';
import Pause from '@/src/assets/icons/pause';
import Play from '@/src/assets/icons/play';
import SliderCom from './SliderCom';
import { Repo } from '../repo/repo';

export default function MusicBottomBar(musicInfo: IMusicBottomBarProps) {
  const {pauseMusic, playMusic, isPlaying } = useMusic();
  const router = useRouter();
  const { user} = useUser();

  const handFavorite = async () => { 
    try {
      if (musicInfo.isFavorite) {
        const status = await Repo.deleteFavorite(musicInfo.id);
        if(status == 200) musicInfo.setIsFavorite(false);
      } else { 
        if (!user) return console.log('user not found');
        const status = await Repo.creteFavorite(user.id, musicInfo.id);
        if(status === 201) musicInfo.setIsFavorite(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  


  return (
    <View className='bg-light-900 px-3 pb-1 rounded-lg absolute bottom-5 w-full mx-5'>
      <View className='flex-row justify-between w-full items-center pb-1 pt-2' >
        <Pressable
          onPress={() => router.push({
            pathname: '(stack)/listen',
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            params:musicInfo
          })}
          className='flex-row' style={{ columnGap: 15 }}
        >
          <Image
            style={{height:50, width:50}}
            source={{ uri :`${BASE_URL}/file/${musicInfo.image}`}}
            className='rounded-md'
          />
          <View>
            <Text className='font-bold text-light-100'>{musicInfo.name}</Text>
            <Text className='text-light-100' numberOfLines={1}>
              {musicInfo.title?.slice(0, 20)}{musicInfo?.title?.length > 20 && '...'}
            </Text>
          </View>
        </Pressable>
        <View className='flex-row' style={{columnGap:10}}>
          <Favorite
            onPress={handFavorite}
            color={colors.light[100]}
            outline={ musicInfo.isFavorite ? colors.light[100] : colors.transparent}
            style={{ marginTop: 7 }}
          />
          {isPlaying ?
            <Pause
              size={35}
              onPress={async () => await pauseMusic()}
              color={colors.light[100]}
              outline={colors.light[100]}
            />:
            <Play
              size={35}
              onPress={async() => await playMusic() }
              color={colors.light[100]}
              outline={colors.light[100]}
            />}
        </View>
      </View>
      <SliderCom />
    </View>
  );
}