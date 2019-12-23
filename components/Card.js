/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Chip } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.borderColor,
    borderRadius: Layout.sizes.radius,
    marginTop: 5,
    padding: Layout.sizes.padding / 2,
  },
  title_text: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: 'bold',
    fontFamily: 'notosans-regular-italic',
  },
  subtitle_text: {
    fontSize: 14,
    color: Colors.primary.default,
    fontFamily: 'notosans-regular',
  },
  children_container: {
    flexDirection: 'row',
    marginTop: Layout.sizes.margin / 2,
  },
});

const Card = ({ title, items, handleOnPress }) => (
  <TouchableOpacity
    style={styles.container}
    activeOpacity={0.8}
    onPress={() => handleOnPress()}
  >
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View>
        <Text
          style={styles.title_text}
        >
          {title}
        </Text>
        <Text
          style={styles.subtitle_text}
        >
          {title}
        </Text>
      </View>
      <FontAwesome name="edit" color={Colors.primary.default} size={24} />
    </View>
    {
      items && (
        <View style={styles.children_container}>
          {
            items.map((child) => <Chip style={{ marginRight: 5 }}>{child.name}</Chip>)
          }
        </View>
      )
    }
  </TouchableOpacity>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  handleOnPress: PropTypes.func.isRequired,
};

export default withNavigation(Card);
