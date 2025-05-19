import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface ConformationModalProps {
    visible: true;
    onClose: () => void
}

const ConformationModal = (props: ConformationModalProps) => {
    const { visible, onClose } = props;
  return (
    <View style={styles.container}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={visible}
        onRequestClose={() => {
            onClose && onClose()
        }}
      >
        <View style = {styles.centeredView}>
            <View style = {styles.modalView}>
                <Text style={styles.modaltextStyle}>Hello World</Text>
            </View>
        </View>

      </Modal>
    </View>
  )
}

export default ConformationModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    centeredView: {},
})