import { Text, Image, useWindowDimensions, Pressable, View } from 'react-native';
import { BASE_URL } from '../constants/const';

type CardDataTypes = {
  image: string;
  title: string
  color: string,
  name: string,
  onPress: () => void;
}

export default function Card(props: CardDataTypes) { 
  const { width, height } = useWindowDimensions();

  const cardHeight = height / 3.5;
  const cardWidth = (width / 2) * 0.8;
  const cardImageHeight = cardHeight * 0.9;

  // fetch(`${BASE_URL}/file/${props.image}`).then((response) => { 
  //   console.log(response);
  // });



  return (
    <Pressable
      onPress={props.onPress}
      className='mr-5'
      style={{
        width: cardWidth,
        height: cardHeight
      }}
    >
      <View
        style={{
          position: 'absolute',
          height: cardImageHeight,
          width: cardWidth,
          top: 0, right: 0, left: 0,
        }}
      >
        <Image
          resizeMode='cover'
          style={{width : cardWidth, height :cardImageHeight *0.7}}
          source={{
            uri: `${BASE_URL}/file/${props.image}`
          }}
        />
        <View className='h-2 w-full' style={{ backgroundColor: props.color }} />
        <Text numberOfLines={2} className='text-light-800' >
          {props.title}
        </Text>
      </View>
      <View
        className='flex-row'
        style={{
          position:'absolute',
          top: cardHeight / 2,
          columnGap:10
        }}
      >
        <View
          className='h-6 w-2'
          style={{ backgroundColor: props.color}}
        />
        <Text className='font-bold text-light-100'>{ props.name}</Text>
      </View>
    </Pressable>
  );
}