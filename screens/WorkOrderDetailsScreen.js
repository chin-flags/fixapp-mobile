/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect, useRef } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation';
import Modalize from 'react-native-modalize';
import { Portal } from 'react-native-paper';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useFirestoreDocument } from '../hooks/useFirestore';

import WorkOrderSummary from '../components/WorkOrder/WorkOrderSummary';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import UpDateStatusModal from '../components/WorkOrder/UpDateStatusModal';
import WorkOrderHeader from '../components/Headers/WorkOrderHeader';

const WorkOrderDetails = ({ navigation }) => {
  const modalRef = useRef(Modalize);

  const onOpen = () => {
    const modal = modalRef.current;
    if (modal) {
      modal.open();
    }
  };
  const workOrderId = navigation.getParam('workOrderId');
  const { data, loading } = useFirestoreDocument('workOrders', workOrderId);
  const workOrder = data.data;
  useEffect(() => {
    navigation.setParams({ onOpen, workOrder });
  }, []);

  const onClose = () => {
    const modal = modalRef.current;
    if (modal) {
      modal.close();
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {
        loading && (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator />
          </View>
        )
      }
      {
        workOrder && (
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
        )
      }
    </View>
  );
};

// WorkOrderDetails.navigationOptions = ({ navigation }) => {
//   const onOpen = navigation.getParam('onOpen');
//   const workOrder = navigation.getParam('workOrder');
//   return ({
//     header: <WorkOrderHeader onOpen={onOpen} workOrder={workOrder} />,
//   });
// };

WorkOrderDetails.propTypes = {
  navigation: PropTypes.object.isRequired,
  workOrder: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workOrder: state.workorder.selectedWorkorder,
});

export default connect(mapStateToProps)(withNavigation(WorkOrderDetails));
