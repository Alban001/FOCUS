import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { Spacing } from '../utils/sizes';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={subject}
          style={styles.textInput}
          onChangeText={setSubject}
          label='What you would like to focus on?'
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={() => addSubject(subject)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: Spacing.sm,
  },
  inputContainer: {
    padding: Spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
});