/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import { setSelectedWorkorder } from '../../redux/workorder/workorderActions';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: Layout.sizes.radius,
    marginTop: 5,
  },
  content: {
    padding: Layout.sizes.padding / 2,
  },
  text: {
    color: Colors.black,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'notosans-regular-italic',
  },
});

const WorkOrderItem = ({ workOrder, navigation, setWorkorder }) => {
  const { location, issueDetails, status, tags } = workOrder;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        setWorkorder(workOrder);
        navigation.navigate('WorkOrderDetails');
      }}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={[styles.text, styles.title]}>{location}</Text>
        <Text style={styles.text}>{issueDetails}</Text>
        <Text style={styles.text}>{status}</Text>
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
  setWorkorder: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setWorkorder: (workorder) => dispatch(setSelectedWorkorder(workorder))
});

export default connect(null, mapDispatchToProps)(withNavigation(WorkOrderItem));
