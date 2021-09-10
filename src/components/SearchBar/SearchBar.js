import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchBar.styles';

const SearchBar = props => {
  return (
    <TextInput
      style={styles.text_input}
      placeholder="Yapılacak..."
      onChangeText={props.onSearch}></TextInput>
  );
};

export default SearchBar;
