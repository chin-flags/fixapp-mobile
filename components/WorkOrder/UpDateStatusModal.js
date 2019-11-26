/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import {
  View,
  Text,
  Picker,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';


import CustomButton from '../CustomButton/CustomButton';
import pickImage from '../ImagePicker';
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';
import ImageGallery from '../ImageGallery';

import { status, workOrders } from '../../mock/mockdata';

const UpDateStatusModal = ({ workOrder, currentStatus, onClose }) => {
  const [update, setUpdate] = useState({
    type: currentStatus,
    comments: '',
    images: [],
  });
  const submitUpdate = () => {
    // aync call to firestore; for now just change mock data
    workOrders.find((wo) => wo.id === workOrder.id).status = update.status;
    onClose();
  };

  return (
    <View style={{ padding: Layout.sizes.padding }}>
      <Text
        style={{
          fontSize: 20,
          color: Colors.black,
          fontFamily: 'notosans-bold',
        }}
      >
      Anything new?
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: Colors.black,
          fontFamily: 'notosans-bold',
        }}
      >
        update it here
      </Text>
      <Picker
        selectedValue={update.type}
        onValueChange={(value) => setUpdate({ ...update, type: value })}
        style={{
          backgroundColor: 'white',
          elevation: 2,
          padding: 10,
          borderRadius: 30,
          marginVertical: 15,
        }}
      >
        {
          status.map((s) => (
            <Picker.Item key={s.id} value={s.name} label={s.name} />
          ))
        }
      </Picker>
      <TextInput
        value={update.comments}
        multiline
        placeholder="Comments"
        style={{
          backgroundColor: 'white',
          elevation: 2,
          padding: 10,
          borderRadius: 5,
          marginVertical: 15,
        }}
        onChangeText={(text) => setUpdate({ ...update, comments: text })}
      />
      <CustomButton title="Pick Image" onPress={() => pickImage(update, setUpdate)} color={Colors.gray} />
      {
        update.images && <ImageGallery images={update.images} />
      }
      <CustomButton title="Update" onPress={() => submitUpdate()} />
    </View>
  );
};

UpDateStatusModal.propTypes = {
  currentStatus: PropTypes.string.isRequired,
  workOrder: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UpDateStatusModal;
