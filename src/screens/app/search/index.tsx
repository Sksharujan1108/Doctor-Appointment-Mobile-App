import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Colors from '@/utlis/colors';
import SearchBar from '@/component/searchBar';
import {AuthStackScreenProps} from '@/navigation/navigation-model/auth-model/authModel';
import CatergoriesList from '@/component/catergories';

const SearchScreen = ({navigation}: AuthStackScreenProps<'SearchScreen'>) => {
  const [searchInput, setSearchInput] = useState('');

  const onChangeText = useCallback((text: string) => {}, []);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar
          onPressBack={() => {
            navigation.goBack();
          }}
          value={searchInput}
          onChangeText={onChangeText}
        />
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.recentSearchText}>Recent Searches</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            console.log('Clear all');
          }}>
          <Text style={styles.clear}>Clear</Text>
        </TouchableOpacity>
      </View>
      {/* List Of Recent Searches */}
      
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors?.secondary,
  },
  searchContainer: {
    // height: 60,
    padding: 10,
    backgroundColor: Colors?.Primary,
  },
  subContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  recentSearchText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  clear: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors?.Primary,
  },
});
