import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0B3DA9',
  },
  bgImage: {
    flex: 1
  },
  doctorImageContainer: {
    flex: 0.65,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doctorImage: {
    width: '100%',
    marginTop: 50,
  },
  whiteContainer: {
    flex: 0.4,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    margin: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10
  },
  numberText: {
    fontSize: 18,
    paddingHorizontal: 10,
    color: '#A9A9A9',
  },
  inputContainer: {
    padding: 10,
    fontSize: 18,
    flex: 1,
    color: '#000',
  },
  loginWithMobileBtn: {
    width: '100%',
    padding: 20,
  },
  footerBtn: {
    position: 'absolute',
    bottom: 15,
    width: '100%',
    padding: 20,
  },
  googleBtnStyle: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#fff',
    borderColor: '#939393',
    borderWidth: 1,
    borderRadius: 8,
    elevation: 2,
  },
});
