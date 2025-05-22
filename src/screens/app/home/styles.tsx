import Colors from '@/utlis/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors?.secondary,
  },
  appointmentCardContainer: {
    margin: 15,
    borderRadius: 10,
    padding: 10,
    // justifyContent: 'center',
    backgroundColor: Colors?.Primary,
  },
  appointmentCard: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  doctorInfo: {
    paddingHorizontal: 15,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors?.secondary,
    paddingVertical: 5,
  },

  appointmentDetailsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  dateTimeContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateTimeText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors?.secondary,
    marginLeft: 5,
  },
});
