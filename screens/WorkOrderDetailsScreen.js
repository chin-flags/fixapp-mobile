/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import Modalize from 'react-native-modalize';
import { Portal } from 'react-native-paper';
import PropTypes from 'prop-types';

import WorkOrderSummary from '../components/WorkOrder/WorkOrderSummary';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import UpDateStatusModal from '../components/WorkOrder/UpDateStatusModal';
import WorkOrderHeader from '../components/Headers/WorkOrderHeader';

const WorkOrderDetails = ({ navigation }) => {
  const modalRef = useRef(Modalize);
  const workOrder = navigation.getParam('workOrder');

  const onOpen = () => {
    const modal = modalRef.current;
    if (modal) {
      modal.open();
    }
  };

  const onClose = () => {
    const modal = modalRef.current;
    if (modal) {
      modal.close();
    }
  };

  useEffect(() => {
    navigation.setParams({ onOpen, workOrder });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <Portal>
        <Modalize
          ref={modalRef}
          modalHeight={Layout.window.height / 1.5}
          snapPoint={Layout.window.height / 2}
          keyboardAvoidingBehavior
        >
          <UpDateStatusModal
            currentStatus={workOrder.status}
            workOrder={workOrder}
            onClose={onClose}
          />
        </Modalize>
      </Portal>
      <View
        style={{
          marginTop: Layout.sizes.margin,
          paddingHorizontal: Layout.sizes.padding,
        }}
      >
        <WorkOrderSummary workOrder={workOrder} />
      </View>
    </View>
  );
};

WorkOrderDetails.navigationOptions = ({ navigation }) => {
  const workOrder = navigation.getParam('workOrder');
  const onOpen = navigation.getParam('onOpen');
  return ({
    header: <WorkOrderHeader workOrder={workOrder} onOpen={onOpen} />,
  });
};

WorkOrderDetails.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default withNavigation(WorkOrderDetails);
