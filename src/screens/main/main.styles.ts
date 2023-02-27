import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#232323',
  },
  mainContent: {
    flex: 1,
  },
  controls: {
    width: '100%',
    backgroundColor: '#fafafa',
  },
  inputs: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  customInput: {
    flex: 1,
    height: 32,
    paddingRight: 4,
  },
  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  submitButtonTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
