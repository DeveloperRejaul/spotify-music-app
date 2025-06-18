import { createContext, useContext, useState } from 'react';
import { UserContextTypes, UserProviderTypes, UserType } from './types';

const Context = createContext<UserContextTypes>({} as UserContextTypes);



export function UserProvider({ children }: UserProviderTypes) {
  const [user, setUser] = useState<UserType | null>(null);
    
  const addUser = (data: UserType) => {
    setUser({...data});
  };
    
  return <Context.Provider value={{user, addUser}}>{children }</Context.Provider>;
}

export const useUser = () => useContext(Context);