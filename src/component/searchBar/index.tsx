import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '@/utlis/colors';

interface SearchBarProps {
  onPressBack?: ((event: GestureResponderEvent) => void) | undefined;
  value?: string;
  onChangeText?: (text: string) => void;
}

const SearchBar = (props: SearchBarProps) => {
  const {onPressBack, value, onChangeText} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.6} onPress={onPressBack}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Search Doctor..."
        placeholderTextColor="#B0B0B0"
        autoCorrect={false}
        autoCapitalize="none"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    marginTop: 70,
    marginBottom: 10,
    backgroundColor: Colors?.secondary,
    borderWidth: 1,
    borderRadius: 8,
    elevation: 2,
  },
  backText: {
    fontSize: 16,
    color: '#000',
  },
  input: {
    flex: 1,
    height: 30,
    fontSize: 16,
    color: '#000',
  },
});
