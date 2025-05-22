import {Image, Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '@/utlis/colors';
import { images } from '@/utlis';
import PrimaryButton from '../primaryButton';

interface ConformationModalProps {
  visible: boolean;
  onClose: () => void;
  doctorName?: string;
  date?: any;
  time?: any
  onPressDone: () => void;
}

const ConformationModal = (props: ConformationModalProps) => {
  const {visible, onClose, doctorName, date, time, onPressDone} = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        onClose && onClose();
      }}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          {/*  */}
          <View style={styles.circleBgContainer}>
            <Image
              source={images?.Like}
              style={styles.likeImage}
            />
          </View>
          {/*  */}
          <View style={styles.textContainer}>
            <Text style={styles.modalheaderTextStyle}>Thank You !</Text>
            <Text style={styles.successTextStyle}>Your Appointment Successful 🎉</Text>
            <Text style={styles.descripitionTextStyle}>
              {`You booked an appointment with ${doctorName} on ${date} at ${time}`}
            </Text>
          </View>
          {/*  */}
          <View style={styles.buttonContainer}>
            <PrimaryButton
              label="Done"
              onPress={onPressDone}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConformationModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    // height: '100%',
  },
  modalView: {
    width: '90%',
    height: '50%',
    backgroundColor: Colors?.secondary,
    alignItems: 'center',
    borderRadius: 20,
    padding: 30,
    shadowColor: Colors?.secondary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  circleBgContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: '#EDEDFC',
  },
  likeImage: {
    width: 50,
    height: 50,
  },
  textContainer: {
    marginTop: 20,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalheaderTextStyle: {
    fontSize: 24,
    fontWeight: '500',
    color: Colors?.black,
  },
  successTextStyle: {
    fontSize: 18,
    fontWeight: '400',
    color: 'gray',
    marginTop: 10,
  },
  descripitionTextStyle: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 23,
  },

  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
  },
});
