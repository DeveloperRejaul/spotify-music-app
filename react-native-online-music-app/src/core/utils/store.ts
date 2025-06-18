import * as SecureStore from 'expo-secure-store';

export class store {
  static async save(key: string, value: string) {
    await SecureStore.setItemAsync(key, value);
  }

  static async find(key: string) {
    return await SecureStore.getItemAsync(key);
  }
    
  static async remove(key: string) {
    await SecureStore.deleteItemAsync(key);
  }
    
  static async update(key: string, value: string) { 
    await this.remove(key);
    await this.save(key, value);
  } 
}