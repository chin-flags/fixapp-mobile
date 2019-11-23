/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import colors from '../../constants/Colors';
import layout from '../../constants/Layout';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 5,
    backgroundColor: colors.white,
    borderRadius: 5,
    elevation: 2,
  },
  content: {
    padding: layout.sizes.padding / 2,
  },
  text: {
    color: colors.black,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'notosans-regular-italic',
  },
});

const WorkOrderItem = ({ workOrder, navigation }) => {
  const { location, issueDetails, tags } = workOrder;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('WorkOrderDetails', { workOrder })}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={[styles.text, styles.title]}>{location}</Text>
        <Text style={styles.text}>{issueDetails}</Text>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          {tags
            && tags.map((tag) => (
              <View
                key={`${workOrder.id}-${tag}`}
                style={{
                  backgroundColor: '#374F6C',
                  marginRight: 5,
                  paddingHorizontal: 15,
                  borderRadius: 20,
                }}
              >
                <Text style={{ color: 'white' }}>{tag}</Text>
              </View>
            ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

WorkOrderItem.propTypes = {
  workOrder: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default withNavigation(WorkOrderItem);