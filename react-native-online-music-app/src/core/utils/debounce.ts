export function debounce(callBack: CallableFunction, delay: number) {
  let timeout: NodeJS.Timeout;

  return function (value: number) { 
    clearTimeout(timeout);
    timeout = setTimeout(() => { 
      callBack(value);
    }, delay);
  }; 
}