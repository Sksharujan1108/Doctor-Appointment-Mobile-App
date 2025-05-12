import {
  Dimensions,
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useMemo} from 'react';
import {images} from '@/utlis';
import {useQuery} from '@tanstack/react-query';
import {fetchspecialtiesData} from '@/api/specialitiesData';

const CardGap = 16;
const CardWith = (Dimensions.get('window').width - CardGap * 3) / 2;

interface DoctorCardProps {
  getData: {
    id: string;
    name: string;
    speciality: string;
    email: string;
    phone: string;
    image: string;
    rating: string;
    fees: string;
  };
  containerStyle: StyleProp<ViewStyle>;
  imageStyleProps?: any;
  disable: boolean;
  horizontal: any;
  onPress?: (id: any) => void;
  displayAll?: boolean;
}

const DoctorCard = (props: DoctorCardProps) => {
  const {
    getData,
    containerStyle,
    imageStyleProps,
    horizontal,
    onPress,
    disable,
    displayAll,
  } = props;

  // Specialities
  const {data} = useQuery({
    queryKey: ['specialities'],
    queryFn: fetchspecialtiesData,
  });

  const specialityObj = useMemo(() => {
    return data?.find(item => item?.id == getData?.speciality);
  }, [getData?.speciality, data]);

  return (
    <TouchableOpacity
      style={[, styles.container, containerStyle]}
      onPress={() => onPress?.(getData.id)}
      disabled={disable}>
      <Image
        source={require('@/assets/img/doctorImage.jpg')}
        style={[
          styles.imageStyle,
          !horizontal ? {height: 220} : {},
          imageStyleProps,
        ]}
      />

      <View style={styles.rowContainer}>
        <Text style={styles.nameText}>{getData?.name}</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 5}}>
          <Image source={images?.RatingStar} />
          <Text style={styles.nameText}>{getData?.rating}</Text>
        </View>
        {/*  */}
      </View>
      <View style={{flexDirection: 'row', padding: 5}}>
        {displayAll && (
          <Text style={{paddingRight: 15}}>{specialityObj?.title}</Text>
        )}
        {!displayAll && (
          <Text style={styles.nameText}>Fee LKR {getData?.fees}</Text>
        )}
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
