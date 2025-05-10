import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import {styles} from './styles';
import {images} from '@/utlis';
import PrimaryButton from '@/component/primaryButton';
import {AuthStackScreenProps} from '@/navigation/navigation-model/auth-model/authModel';

const LoginScreen = ({navigation}: AuthStackScreenProps<'LoginScreen'>) => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const onPressLogin = useCallback(() => {
        if(phoneNumber?.length == 10) {
            navigation.navigate('OtpVerificationScreen', {
                mobileNumber: phoneNumber
            })
        }
    },[phoneNumber])

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.doctorImageContainer}>
          <Image
            source={images?.LoginBgImage}
            style={styles.doctorImage}
            resizeMethod="resize"
            resizeMode="contain"
          />
        </View>
        {/*  */}
        <View style={styles.whiteContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.heading}>Log in or Sign up</Text>
          </View>
          {/*  */}
          <View style={styles.phoneNumberContainer}>
            <Text style={styles.numberText}>{'+94'}</Text>
            <TextInput 
                style={styles.inputContainer} 
                keyboardType='numeric'
                placeholder="Enter your phone number"
                maxLength={10}
                value={phoneNumber}
                onChangeText={(text) => setPhoneNumber(text)}
            />
          </View>
          {/*  */}
          <View style={styles.loginWithMobileBtn}>
            <PrimaryButton
              label="Login with mobile"
              onPress={onPressLogin}
            />
          </View>

          {/*  */}
          <View style={styles.footerBtn}>
            <TouchableOpacity
              style={styles.googleBtnStyle}
              onPress={() => {
                navigation.navigate('LoginScreen');
              }}
            >
              <Image
                source={images.Google}
              />
              <Text
                style = {{
                    fontSize: 18,
                    color: '#000'
                }}
              >
                Continue with Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
