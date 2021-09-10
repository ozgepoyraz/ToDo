import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 13,
    alignSelf: 'stretch',
    justifyContent: 'center',
    margin: 5,
    padding: 10,
    backgroundColor: '#7da453',
    borderRadius: 10,
  },
  changed_container: {
    height: Dimensions.get('window').height / 13,
    alignSelf: 'stretch',
    justifyContent: 'center',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'grey',
  },
  title: {
    color: 'white',
    fontSize: 17,
  },
});

export default styles;
