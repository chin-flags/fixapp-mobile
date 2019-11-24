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
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';
import { status } from '../../mock/mockdata';

const UpDateStatusModal = ({ currentStatus }) => {
  const [update, setUpdate] = useState({
    type: '',
    comments: '',
    images: [],
  });

  const submitUpdate = () => {
    // aync call to firestore;
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
        GOT GOOD NEWS?
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
        selectedValue={currentStatus}
        style={{
          backgroundColor: 'white',
          elevation: 2,
          padding: 10,
          borderRadius: 5,
          marginVertical: 15,
        }}
      >
        {
          status.map((s) => (
            <Picker.Item key={s.id} label={s.name} />
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
      <CustomButton title="Update" />
    </View>
  );
  
} 

UpDateStatusModal.propTypes = {
  currentStatus: PropTypes.string.isRequired,
};

export default UpDateStatusModal;
