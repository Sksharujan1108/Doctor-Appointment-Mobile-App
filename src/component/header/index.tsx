import {
  GestureResponderEvent,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '@/utlis/colors';
import {images} from '@/utlis';

interface HeaderProps {
  title?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  onPressSearch?: ((event: GestureResponderEvent) => void) | undefined;
}

const Header = (props: HeaderProps) => {
  const {title, onPress, onPressSearch} = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainRowContainer}>
        <View style={styles.imageTextContainer}>
          <View style={styles.imageContainer}>
            <Image 
              style={styles.imageStyle} 
              source={images?.ProfileImage}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.headerTitle}>Hello, Welcome 🎉</Text>
            <Text style={styles.userText}>{title}</Text>
          </View>
        </View>
        {/*  */}
        <TouchableOpacity 
          onPress={onPress} 
          activeOpacity={0.6}
        >
          <Image
            source={images?.Notification}
            style={styles.notificationIcon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.searchInputContainer}
        activeOpacity={0.6}
        onPress={onPressSearch}>
        <Image
          source={images?.Search}
            style={{ alignItems: 'center', justifyContent: 'center', width: 20, height: 20 }}
        />
        <Text style={styles.searchInput}>Search Doctor...</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: '25%',
    backgroundColor: Colors?.Primary,
  },
  mainRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  imageTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors?.secondary,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  textContainer: {
    gap: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors?.secondary,
  },
  userText: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors?.secondary,
  },
  notificationIcon: {
    width: 30,
    height: 30,
    tintColor: Colors?.secondary,
  },

  searchInputContainer: {
    width: '90%',
    height: 50,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    marginTop: 25,
    borderWidth: 1,
    borderColor: '#EDEDFC',
    borderRadius: 10,
  },
  searchInput: {
    width: '80%',
    fontSize: 16,
    fontWeight: '400',
    color: Colors?.secondary,
    // backgroundColor: 'pink'
  },
});
