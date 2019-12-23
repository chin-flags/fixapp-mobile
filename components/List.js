/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Card from './Card';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const List = ({ data }) => (
  <View style={styles.container}>
    {
      data.map((entry) =>{
        const { id, title } = entry;
        return (
          <Card key={id} title={title} />
        );
      })
    }
  </View>
);

List.propTypes = {
  data: PropTypes.array.isRequired,
};

export default List;
