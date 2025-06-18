import { createContext, useContext, useEffect, useState} from 'react';
import { MusicProviderTypes,ContextTypes } from './types';
import TrackPlayer, { AddTrack, AppKilledPlaybackBehavior, RepeatMode,usePlaybackState, State} from 'react-native-track-player';
import { PlaybackService } from '@/src/core/utils/service';

// setup Track Player
TrackPlayer.registerPlaybackService(() => PlaybackService);


// create a context
const Context = createContext <ContextTypes>( {} as ContextTypes);

// setup provider
export function MusicProvider({ children }: MusicProviderTypes) {
  const [isSetupPlayer, setIsSetupPlayer] = useState(false);
  const [musicPosition, setMusicPosition] = useState(0);
  const [musicDuration, setMusicDuration] = useState(0);
  const [isPlaying ,setIsPlaying] = useState(false);
  const playerState = usePlaybackState();


  // handle get progress
  const getProgress = async () => await TrackPlayer.getProgress();

  // handle play music
  const playMusic = async () => {
    try {
      await TrackPlayer.play();
      const { duration, position } = await getProgress();
      setIsPlaying(true);
      setMusicPosition(position);
      setMusicDuration(duration); 
    } catch (error) {
      console.log(error);
    }
  };
    
  // handle pause music 
  const pauseMusic = async () => {
    try {
      await TrackPlayer.pause();
      setIsPlaying(false);
    } catch (error) {
      console.log(error);
    }
  };
    
  // handle reset music
  const resetMusic = async () => {
    try {
      await TrackPlayer.reset();
      setMusicPosition(0);
      setMusicDuration(0); 
    } catch (error) {
      console.log(error);
    }
  };
  
  // handle play background setup
  const setBackgroundMusic = () => { 
    TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback,
      },
    });
  }; 
    

  const addMusic = async (music: AddTrack) => {
    TrackPlayer.setQueue([music]);
  };
    

  // handle player setup 
  const playerSetup = async () => {
    if (!isSetupPlayer) {
      await TrackPlayer.setupPlayer();
      setIsSetupPlayer(true);
    }
  };
    
  // handle mode player 
  const setRepeatMode = async () => await TrackPlayer.setRepeatMode(RepeatMode.Queue);

  // handle seekTo music
  const seekTo = async (num: number) => await TrackPlayer.seekTo(num); 
   
    
  useEffect(() => {
    const init = async () => { 
      try {
        await playerSetup();
        await setRepeatMode();
        setBackgroundMusic();
      } catch (error) {
        console.log(error);
      }
    };
    init();
  },[]);

  useEffect( () => { 
    (async () => {    
      if (playerState.state === State.Playing) {
        setIsPlaying(true);
        const { duration } = await getProgress();
        setMusicDuration(duration);
      }
    })();
  },[playerState.state]);
 
    
    
  return (
    <Context.Provider value={{
      addMusic, playMusic, pauseMusic, resetMusic,
      setBackgroundMusic, playerSetup, setRepeatMode,
      getProgress,seekTo,
      isPlaying,musicPosition, musicDuration
    }}
    > 
      { children}
    </Context.Provider>
  );
}

export const useMusic = () => useContext(Context);