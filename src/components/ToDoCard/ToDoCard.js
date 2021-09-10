import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ToDoCard.styles';

const ToDoCard = ({title}) => {
  const [containerStyle, setContainerStyle] = useState(styles.container);
  const [textStyle, setTextStyle] = useState(styles.title);

  function changeStyle() {
    setContainerStyle({...containerStyle, backgroundColor: '#37474f'});
    setTextStyle({
      ...textStyle,
      color: '#727576',
      textDecorationLine: 'line-through',
    });
    console.log(containerStyle);
  }

  return (
    <TouchableOpacity style={containerStyle} onPress={changeStyle}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ToDoCard;
