import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {images} from '@/utlis';

const CardGap = 16;
const CardWith = (Dimensions.get('window').width - CardGap * 3) / 2;

interface DoctorCardProps {
  data: {
    id: string;
    name: string;
    speciality: string;
    email: string;
    phone: string;
    image: string;
    rating: string;
    fees: string;
  };
  horizontal: any;
  onPress?: (id: any) => void;
}

const DoctorCard = (props: DoctorCardProps) => {
  const {data, horizontal, onPress} = props;

  return (
    <TouchableOpacity 
      style={[, styles.container]}
      onPress={() => onPress?.(data.id)}
    >
      <Image
        source={require('@/assets/img/doctorImage.jpg')}
        style={[styles.imageStyle, !horizontal ? {height: 220} : {}]}
      />

      <View style={styles.rowContainer}>
        <Text style={styles.nameText}>{data?.name}</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 5}}>
          <Image source={images?.RatingStar} />
          <Text style={styles.nameText}>{data?.rating}</Text>
        </View>
        {/*  */}
        <View style={{flexDirection: 'row', paddingVertical: 5}}>
          <Text style={styles.nameText}>Fee LKR {data?.fees}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: CardWith,
  },
  imageStyle: {
    height: '45%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  rowContainer: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 14,
    fontWeight: '400',
  },
});
