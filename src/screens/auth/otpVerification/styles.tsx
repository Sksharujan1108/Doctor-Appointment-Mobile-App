import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    marginTop: 20,
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  otpContainer: {
    margin: 20,
  },
  resendBtn: {},
  resendText: {
    fontSize: 18,
    color: '#0B3DA9',
    textAlign: 'center',
  },

  otpInputContainer: {
    // backgroundColor: 'red'
  },
  pinCodeContainer: {
    width: 50,
    height: 50,
    // backgroundColor: 'pink'
  },
  pinCodeText: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
  },
  activePinCodeContainer: {
    borderColor: '#0B3DA9',
  },
  filledPinCodeContainer: {
    borderColor: '#000',
  }
});
