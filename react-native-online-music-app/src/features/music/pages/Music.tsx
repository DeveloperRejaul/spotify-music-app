import { useMusic } from '@/src/core/context/musicContext';
import { useCallback, useState } from 'react';
import { IMusicData } from '../types';
import { useActiveTrack } from 'react-native-track-player';
import { BASE_URL } from '@/src/core/constants/const';
import { View ,Text} from 'react-native';
import Button from '@/src/core/components/Button';
import { colors } from '@/src/core/constants/colors';
import CardList from '../components/CardList';
import MusicBottomBar from '../components/MusicBottomBar';

export default function Music() {
  const { addMusic, playMusic } = useMusic();
  const [musicInfo, setMusicInfo] = useState<IMusicData>({} as IMusicData);
  const [isFavorite, setIsFavorite] = useState(false);
  const track = useActiveTrack();

  const handleCard = useCallback( async (item: IMusicData) => {
    try {
      await addMusic({
        url: `${BASE_URL}/file/${item.url}`,
        title: item.title,
        artist: item.name,
        artwork: item.image as string
      });
      setMusicInfo(item);
      await playMusic();
      const res = await fetch(`${BASE_URL}/favorite/${item.id}`);
      if (res.status != 200) return setIsFavorite(false);
      setIsFavorite(true);
    } catch (error) {
      console.log(error);
    }
  },[]);

  

  
 
  return (
    <View className='container pt-16'>
      {/* Button Part */}
      <View className='flex-row' style={{columnGap:10}}>
        <Button
          text='M'
          onPress={()=>{}}
        />
        <Button
          text='All'
          onPress={()=>{}}
          className='!bg-success-500 !px-5'
          textStyle={{fontWeight:'normal'}}
        />
        <Button
          text='Music'
          onPress={()=>{}}
          className='!bg-dark-200 !px-5'
          textStyle={{fontWeight:'normal', color:colors.light[100]}}
        />
      </View>
      <View className='py-5' >
        <Text className='sub-title !text-left mb-7'>To get you started</Text>
        <CardList onPress={handleCard} setMusicInfo={setMusicInfo} musicInfo={musicInfo} />
      </View>

      {/* Music Listen bottom Bar */}
      {track && <MusicBottomBar {...{...musicInfo, isFavorite, setIsFavorite}} /> }
    </View>
  );
}
