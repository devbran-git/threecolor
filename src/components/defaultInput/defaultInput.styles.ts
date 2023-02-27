import {StyleSheet} from 'react-native';
import {isIOS} from '../../styles/global';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 43,
    borderWidth: 1,
    borderColor: '#232323',
    paddingVertical: isIOS ? 12 : 0,
    paddingLeft: 8,
  },
  input: {
    color: '#232323',
  },
});

export default styles;
