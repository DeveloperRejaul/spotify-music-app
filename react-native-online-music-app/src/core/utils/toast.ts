import Toast from 'react-native-toast-message';
interface ToastParams { 
  message: string;
  type?: 'success'|'error' |'info' 
} 

export function tost(params?: ToastParams) {
  Toast.show({
    type: params?.type || 'success',
    text1: 'Hello ',
    text2: params?.message,
    position:'bottom'
  });
}