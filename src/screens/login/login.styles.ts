import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    paddingHorizontal: 32,
  },
  logo: {
    width: 150,
    height: 45,
    alignSelf: 'center',
    marginBottom: 64,
  },
  inputSpacing: {
    marginTop: 12,
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 43,
    backgroundColor: '#232323',
    marginTop: 40,
  },
  loginButtonTitle: {
    fontWeight: '600',
    color: '#fafafa',
  },
});

export default styles;
