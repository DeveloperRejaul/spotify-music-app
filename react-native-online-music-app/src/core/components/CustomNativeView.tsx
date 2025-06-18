import { requireNativeComponent } from 'react-native';

// create custom native view
const MYView = requireNativeComponent('MYProgressBar');


export default (props: {progress: number}) => {
  return <MYView {...props} />;
};
