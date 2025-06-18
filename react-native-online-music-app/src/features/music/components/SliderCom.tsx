import { colors } from '@/src/core/constants/colors';
import { useMusic } from '@/src/core/context/musicContext';
import Slider from '@react-native-community/slider';
import { useProgress } from 'react-native-track-player';

export default function SliderCom() {
  const { musicDuration, seekTo } = useMusic();
  const { position } = useProgress();
  return (
    <Slider
      value={position / (musicDuration || position)}
      style={{ width: '100%', height: 10 }}
      minimumValue={0}
      maximumValue={1}
      minimumTrackTintColor={colors.light[100]}
      maximumTrackTintColor={colors.dark[700]}
      thumbTintColor={colors.light[900]}
      onValueChange={async (value: number) => {
        await seekTo(value * musicDuration);
      }}
    />
  );
}
