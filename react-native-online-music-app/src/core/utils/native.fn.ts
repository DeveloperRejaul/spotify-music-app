import { NativeModules } from 'react-native';
const { Toast } = NativeModules;

interface IToastModule { 
  show: (text: string) => void;
  createCalendarEvent2: (eventName: string, location: string) => Promise<string>; 
}

export const ToastModule: IToastModule = Toast;