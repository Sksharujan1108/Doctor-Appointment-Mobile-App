import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ViewAllAppointmentStackScreenProps } from '@/navigation/navigation-model/app-model/viewAllAppointmentModel';
import Colors from '@/utlis/colors';

const AudioCallScreen = ({ navigation }: ViewAllAppointmentStackScreenProps<'AudioCallScreen'>) => {
  return (
    <View style={styles.container}>
      <Text>AudioCallScreen</Text>
    </View>
  );
};

export default AudioCallScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors?.secondary,
    },
});
