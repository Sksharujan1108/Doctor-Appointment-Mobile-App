import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  doctorImageContainer: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doctorImage: {
    width: '100%',
    marginTop: 120,
  },
  whiteContainer: {
    flex: 0.3,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  subheading: {
    fontSize: 18,
    paddingVertical: 2,
    textAlign: 'center',
    color: '#A9A9A9',
  },
  footerBtn: {
    position: 'absolute',
    bottom: 15,
    width: '100%',
    padding: 20,
  },
});
