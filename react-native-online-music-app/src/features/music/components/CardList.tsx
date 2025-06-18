import { useMusic } from '@/src/core/context/musicContext';
import { CardPropsTypes, IMusicData } from '../types';
import useFetch from '@/src/core/hooks/useFetch';
import { useActiveTrack } from 'react-native-track-player';
import { useEffect } from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { colors } from '@/src/core/constants/colors';
import Card from '@/src/core/components/Card';

export default function CardList(props: CardPropsTypes) { 
  const { Get, data, isLoading, isError, isSuccess } = useFetch<IMusicData[]>();
  const { isPlaying } = useMusic();
  const track = useActiveTrack();

  
  useEffect(() => { 
    (async () => { 
      await Get({endPoint:'music'});
    })();
  }, []);

  
  useEffect(() => { 
    if (data !==null && isSuccess && track && JSON.stringify(props.musicInfo) === '{}') {
      const url = track.url.split('/').pop();
      const activeMusic = data.find(music => music.url === url);
      props.setMusicInfo(activeMusic!);
    }
  }, [data, isSuccess,isPlaying]);

  if(isLoading) return <ActivityIndicator size={50} color={colors.light[100]} />;
  if(isError) return <Text> Something went wrong  </Text>;

  if(isSuccess && data !== null)
    return (
      <FlatList
        showsHorizontalScrollIndicator={ false}
        horizontal
        data={data}
        renderItem={({ item, index }) => (
          <Card
            name={item.name}
            color={colors.error[700]}
            onPress={() => props.onPress(item)}
            key={index}
            image={item.image}
            title={item.title}
          />
        )
        }
      />
    );
}
