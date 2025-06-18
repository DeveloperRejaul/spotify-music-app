export interface IMusicData { 
  color: string;
  createdAt: string;
  id: string;
  image: string;
  name: string;
  title: string;
  updatedAt: string;
  url: string;
}

export interface IMusicBottomBarProps extends IMusicData { 
  isFavorite: boolean,
  setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>
}

export interface CardPropsTypes { 
  onPress: (item: IMusicData) => void;
  setMusicInfo: React.Dispatch<React.SetStateAction<IMusicData>>
  musicInfo: IMusicData
}
export interface ContextProviderProps { 
  children: React.ReactNode
}


