import React from 'react';
import {
  View, Text, TextInput, StyleSheet
} from 'react-native';

const CandidateTextInput = ({ validateOnChange, label, value, errors }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{`${label}:`}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={validateOnChange}
      autoCorrect={false}
    />
    {errors.map(error => <Text style={{ color: 'red' }} key={error}>{'- ' + error}</Text>)}
  </View>
);

export default CandidateTextInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  input: {
    fontSize: 14,
    flex: 1,
    height: 30,
    borderWidth: 1,
    borderColor: '#f5f5f5'
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 8
  },
  error: {
    fontSize: 12,
    color: '#e74c3c'
  },
  errorContainer: {
    padding: 8
  }
});
