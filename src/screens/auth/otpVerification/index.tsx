import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { styles } from './styles';
import { OtpInput } from 'react-native-otp-entry';
import { AuthStackScreenProps } from '@/navigation/navigation-model/auth-model/authModel';

const OtpVerificationScreen = ({ navigation, route}: AuthStackScreenProps<'OtpVerificationScreen'>) => {
  const mobileNumber = route.params?.mobileNumber ?? '';

  const [counter, setCounter] = useState(30)

  const countDown = useCallback (() => {
    if(counter>0) {
        setCounter(counter=>counter-1)
    }
  },[counter])

  useEffect(() => {
    const timer = setInterval(countDown,2000)
    return ()=> clearInterval(timer) 
  },[counter])

  const onChangeText = useCallback((text: any) => {

  }, []);

  const onOtpFilled = useCallback((text: any) => {
    console.log('opt', text);
    navigation.navigate('HomeScreen')
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 18}}>{"We've sent a verification code to"}</Text>
        <Text style={{ fontSize: 18, fontWeight: '500'}}>+94-{mobileNumber}</Text>
      </View>
      <View style={styles.otpContainer}>
        <OtpInput
          numberOfDigits={6}
          onTextChange={onChangeText}
          onFilled={onOtpFilled}
          theme={{
            containerStyle: styles.otpInputContainer,
            pinCodeContainerStyle: styles.pinCodeContainer,
            pinCodeTextStyle: styles.pinCodeText,
            focusedPinCodeContainerStyle: styles.activePinCodeContainer,
            filledPinCodeContainerStyle: styles.filledPinCodeContainer,
          }}
        />
      </View>

      {counter > 0 
        ? <Text style={{ alignSelf: 'center', marginTop: 10,}}>Resend OTP is {counter}s</Text>
        : <TouchableOpacity
            style={styles.resendBtn}
          >
            <Text style={styles.resendText}>Resend</Text>
        </TouchableOpacity>
      }
      
    </SafeAreaView>
  );
};

export default OtpVerificationScreen;
