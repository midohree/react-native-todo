import React from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import { todoAction } from '../features/slice';

Icon.loadFont();

const Star = ({ isMarked, id }) => {
  const dispatch = useDispatch();
  const { markFavorite } = todoAction;

  return (
    <TouchableOpacity onPress={() => dispatch(markFavorite(id))}>
      {isMarked
        ? <Icon name="star" size={20} color='#F4C867' />
        : <Icon name="staro" size={20} color='#DCDCDC' />
      }
    </TouchableOpacity>
  );
};

export default Star;
