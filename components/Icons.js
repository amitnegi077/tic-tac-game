import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Icons = ({name}) => {
  switch (name) {
    case 'Circle':
      return <Icon name="circle-thin" size={45} color="#F4C724" />;
    case 'Cross':
      return <Icon name="times" size={45} color="#10A881" />;

    default:
      return <Icon name="pencil" size={45} color="#303030" />;
  }
};

export default Icons;
