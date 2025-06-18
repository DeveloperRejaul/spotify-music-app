import { AddTrack, Progress, RepeatMode } from 'react-native-track-player';

export interface MusicProviderTypes { 
  children: React.ReactNode
}
export interface UserProviderTypes { 
  children: React.ReactNode
}

export interface UserType { 
  createdAt: string,
  email: string,
  id: string,
  name: string,
  updatedAt: string
}
export interface UserContextTypes { 
  addUser: (user: UserType) => void;
  user: UserType | null
}

export interface ContextTypes { 
  addMusic: (music: AddTrack) => Promise<void>;
  playMusic: () => Promise<void>;
  pauseMusic: () => Promise<void>
  resetMusic: () => Promise<void>;
  setBackgroundMusic: () => void
  playerSetup: () => Promise<void>;
  setRepeatMode: () => Promise<RepeatMode>;
  getProgress: () => Promise<Progress>;
  seekTo: (num: number) => Promise<void>;
  isPlaying: boolean;
  musicPosition: number;
  musicDuration: number;
}