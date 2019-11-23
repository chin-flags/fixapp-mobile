/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const WorkOrderSummaryItem = ({
  icon,
  text,
  tags,
  images,
}) => (
  <View style={{ flexDirection: 'row', marginBottom: 20 }}>
    <AntDesign name={icon} size={24} color={Colors.iconColor} />
    {
      tags && tags.map((tag) => (
        <View style={{
          marginLeft: 20,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
          backgroundColor: '#374F6C',
          borderRadius: 20,
        }}
        >
          <Text style={{ color: 'white' }}>{tag}</Text>
        </View>
      ))
    }
    {
      images && (
      <View style={{ paddingHorizontal: 20, flexDirection: 'row' }}>
        {images.map((image) => (
          <Image
            key={image.uri}
            style={{
              width: 100, height: 75, marginRight: 15, borderRadius: 10,
            }}
            source={image}
          />
        ))}
      </View>
      )
    }
    <Text style={{ marginLeft: 20, fontSize: 14, fontFamily: 'notosans-regular' }}>{text}</Text>
  </View>
);

WorkOrderSummaryItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tags: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
};

export default WorkOrderSummaryItem;
