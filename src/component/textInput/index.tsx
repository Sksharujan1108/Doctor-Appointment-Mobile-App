import { NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputFocusEventData, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/utlis/colors';

interface TextInputFieldProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    maxLength?: number;
    onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    error: string;
}

const TextInputField = (props: TextInputFieldProps) => {
    const { placeholder, value, onChangeText, keyboardType, maxLength, onBlur, error } = props;

    const [focus, setFocus] = useState(false);
  return (
    <View style={styles.container}>
        {/* TextInput */}
        <TextInput
          style={
            [
              styles.textInputContainer,
              focus && { borderColor: Colors?.Primary}
            ]
          }
          placeholder={placeholder}
          placeholderTextColor="#B0B0B0"
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          maxLength={maxLength}
          onFocus={() => setFocus(true)}
          onBlur={(e) => {
            setFocus(false);
            onBlur && onBlur(e);
          }}
        />
        {error && <Text style={styles.validationText}>{error}</Text>}
    </View>
  )
}

export default TextInputField

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10,
    },
    textInputContainer: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#B0B0B0',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
        fontSize: 16,
        color: '#000',
    },

    validationText: {
      color: Colors.danger,
      fontSize: 12,
      marginTop: 0.5,
    },
})