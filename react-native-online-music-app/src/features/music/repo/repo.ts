import { BASE_URL } from '@/src/core/constants/const';

export const Repo = {

  /**
     * @description This Function Creates a new favorite Music 
     * @param userId 
     * @param musicId 
  */
  creteFavorite: async (userId: string, musicId: string): Promise<number> => {
    const res = await fetch(`${BASE_URL}/favorite/`, {
      method:'POST',
      body: JSON.stringify({ userId, musicId }),
      headers: { 'Content-Type':'application/json' }
    });
    return res.status;
  },
  
  /**
     * @description This Function Delete  favorite Music 
     * @param musicId 
  */
  deleteFavorite: async (musicId: string): Promise<number> => {
    const res = await fetch(`${BASE_URL}/favorite/${musicId}`, {
      method:'DELETE',
    });
    return res.status;
  },
  
  /**
     * @description This Function get all favorite Music 
     * @param userId 
  */
  getFavorite: async (userId: string): Promise<number> => {
    const res = await fetch(`${BASE_URL}/favorite/user/${userId}`);
    return await res.json();
  }
};