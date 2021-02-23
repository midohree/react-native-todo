import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

Icon.loadFont();

const Star = ({ isMarked, onPress, id }) => {
  return (
    <TouchableOpacity onPress={() => onPress(id)}>
      {isMarked
        ? <Icon name="star" size={20} color='#F4C867' />
        : <Icon name="staro" size={20} color='#DCDCDC' />
      }
    </TouchableOpacity>
  );
};

export default Star;
