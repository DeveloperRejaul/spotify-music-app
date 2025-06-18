import { useEffect, useState } from 'react';
import { useMusic } from '../context/musicContext';

let interval: NodeJS.Timeout ;
export default () => {
  const { isPlaying, musicDuration, musicPosition } = useMusic();
  const [sliderValue , setSliderValue ] = useState<number>(musicPosition ?? 0);

  useEffect(() => {
    const init = async () => {
      if (isPlaying) { 
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if(interval) clearImmediate(interval);
        interval = setInterval(() => {
          setSliderValue(pre => {
            if (pre < musicDuration) {
              return pre + 1;
            } else {
              return 0;
            }
          });
        }, 1000);
      }
      if (!isPlaying) clearInterval(interval);
    };
    init();
    return () => clearInterval(interval);
 
  }, [isPlaying]);
  

  useEffect(() => {
    setSliderValue(musicPosition);
  }, [musicPosition]);
  
  return {progress:sliderValue, setProgress :setSliderValue};
};