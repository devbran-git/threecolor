import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#232323',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 24,
    paddingHorizontal: 24,
  },
  topBarButton: {},
  topBarOptionButton: {},
  topBarButtonTitle: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 10,
    color: '#fafafa',
  },
  mainContent: {
    // flex: 1,
  },
  webView: {
    width: width,
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
