/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3E5B79',
    borderBottomRightRadius: Layout.sizes.padding,
    borderBottomLeftRadius: Layout.sizes.padding,
    height: Layout.window.height / 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'notosans-bold',
    color: Colors.white,
    fontSize: 26,
  },
  workOrderId: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'notosans-bold-italic',
    marginLeft: 10,
  },
  subTitle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'yellow',
    marginRight: 10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: '70%',
  },
});

const WorkOrderHeader = ({ workOrder, onOpen, navigation }) => (
  <View
    style={styles.container}
  >
    <View
      style={{
        position: 'absolute',
        top: Layout.sizes.padding * 1.5,
        left: Layout.sizes.padding,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons name="md-arrow-round-back" color="white" size={24} />
      </TouchableOpacity>
      <View style={styles.row}>
        <Text
          style={styles.title}
        >
          Work Order
        </Text>
        <Text
          style={styles.workOrderId}
        >
          {workOrder.id}
        </Text>
      </View>
      <View style={styles.row}>
        <View
          style={styles.subTitle}
        />
        <Text
          style={{
            fontFamily: 'notosans-regular',
            color: 'white',
            fontSize: 16,
          }}
        >
          {workOrder.status}
        </Text>
      </View>
    </View>
    <View style={styles.buttonContainer}>
      <Button
        loading={!onOpen}
        style={{ borderColor: Colors.accent, borderWidth: 1, borderRadius: 10 }}
        mode="outlined"
        color={Colors.accent}
        onPress={onOpen}
      >
        <Text style={{ color: 'white', fontSize: Layout.sizes.font }}>
          UPDATE STATUS
        </Text>
      </Button>
    </View>
  </View>
);

WorkOrderHeader.propTypes = {
  workOrder: PropTypes.object.isRequired,
  onOpen: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default withNavigation(WorkOrderHeader);
