import { Pressable , Text, type TextStyle} from 'react-native';

interface ButtonProps { 
  text?: string,
  onPress?: () => void;
  className?: string;
  textStyle?: TextStyle,
}


export default function Button(props: ButtonProps) {

  return (
    <Pressable
      onPress={props.onPress}
      className={`rounded-full bg-error-200 px-3 py-2  center ${props.className}`}
    >
      <Text
        style={props.textStyle}
        className='font-bold text-xl'
      >
        {props.text || 'Click Me'}
      </Text>
    </Pressable>
  );
} 