/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';


const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: Layout.sizes.radius,
    marginTop: 5,
    padding: Layout.sizes.padding / 2,
  },
  title_text: {
    fontSize: 16,
    color: Colors.text.secondary,
    fontWeight: 'bold',
    fontFamily: 'notosans-regular-italic',
  },
  subtitle_text: {
    fontSize: 14,
    color: Colors.primary.light,
    fontFamily: 'notosans-regular',
  },
  children_container: {
    flexDirection: 'row',
    marginTop: Layout.sizes.margin / 2,
  },
});

const Banner = ({ text, buttonTitle, bannerStyles }) => (
  <View style={[styles.container, { ...bannerStyles }]}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View>
        <Text
          style={styles.title_text}
        >
          {text}
        </Text>
      </View>
      <Button
        mode="contained"
        color="#9ccc65"
      >
        {buttonTitle}
      </Button>
    </View>
  </View>
);

Banner.propTypes = {
  text: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  bannerStyles: PropTypes.object,
};

export default Banner;
