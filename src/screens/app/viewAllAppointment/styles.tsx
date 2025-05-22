import Colors from '@/utlis/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
  },
  containerStyle: {
    width: '100%',
  },
  boxContainer: {
    // width: '48%',
    alignItems: 'center',
    backgroundColor: Colors?.secondary,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  iconImageContainer: {
    width: 42,
    height: 42,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: '#EDEDFC',
  },

  aboutMeText: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: '#000',
  },
  aboutMedescription: {
    paddingHorizontal: 15,
    letterSpacing: 0.3,
    lineHeight: 20,
  },
  footerBtn: {
    width: '100%',
    padding: 15,
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors?.secondary,
  },
});
