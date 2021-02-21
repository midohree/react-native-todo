import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

const InputForm = ({
  value,
  setValue,
  handleOnPress,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder='태스크를 입력해 주세요.'
      />
      <Text onPress={() => handleOnPress(value)}>
        <Icon name='add-circle-outline' size={35} color='#037DFE' />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderBottomColor: '#037DFE',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
  },
});

export default InputForm;
