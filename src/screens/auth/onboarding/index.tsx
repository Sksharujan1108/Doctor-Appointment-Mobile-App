import {Image, ImageBackground, Text, View} from 'react-native';
import React from 'react';
import {images} from '@/utlis';
import {styles} from './styles';
import PrimaryButton from '@/component/primaryButton';
import {AuthStackScreenProps} from '@/navigation/navigation-model/auth-model/authModel';

const OnBoardingScreen = ({
  navigation,
}: AuthStackScreenProps<'OnBoardingScreen'>) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images?.OnboardingBgImage}
        style={styles.bgImage}
        resizeMethod="resize"
        resizeMode="cover">
        <View style={{flex: 1}}>
          <View style={styles.doctorImageContainer}>
            <Image
              source={images?.OnboardingDoctorImage}
              style={styles.doctorImage}
              resizeMethod="resize"
              resizeMode="contain"
            />
          </View>
          {/*  */}
          <View style={styles.whiteContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.heading}>Welcome to Medikart</Text>
              <Text style={styles.subheading}>
                Booking appointment your favourite doctor!
              </Text>
            </View>
            {/*  */}
            <View style={styles.footerBtn}>
              <PrimaryButton
                label="Get Started"
                onPress={() => {
                  navigation.navigate('LoginScreen');
                }}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OnBoardingScreen;
