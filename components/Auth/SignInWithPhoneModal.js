/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';


import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors'
import { countryPhoneData } from '../../constants/Strings'

import { status, workOrders } from '../../mock/mockdata';

const SignInWithPhoneModal = () => {
  const [phone, setPhone] = useState( );
  const defaultFlag = countryPhoneData.filter(data=> data.name === 'Sri Lanka')[0].dial_code;
  const [ flag, setFlag] = useState(defaultFlag);
  const signInWithPhone = () => {
  };

  return (
    <KeyboardAvoidingView style={{ padding: Layout.sizes.padding, zIndex: 100 }}
    behavior='padding' enabled 
    >
     
      <Text
        style={{
          fontSize: 20,
          color: Colors.black,
          fontFamily: 'notosans-bold',
        }}
      >
      Prefer phone?
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: Colors.black,
          fontFamily: 'notosans-bold',
        }}
      >
      put it below
      </Text>
      <View
        style={{
          flexDirection:'row',
          backgroundColor: 'white',
          borderRadius: Layout.sizes.radius,
          borderWidth: 1,
          borderColor: Colors.borderColor,
          marginVertical: 15,
          alignItems: 'center',
          height:40,
        }}
      >
        <TouchableOpacity activeOpacity={0.8} style={{backgroundColor: Colors.background, paddingHorizontal: 10}}>
          <Text style={{marginRight: 10, fontSize: 16, fontFamily: 'notosans-regular' }}>{flag}</Text>
        </TouchableOpacity>
        <TextInput
          style={{flex:1, fontSize: 16, fontFamily: 'notosans-regular'}}
          multiline
          placeholder="000-000-000"
        />
      </View>
      <Button mode='contained' color={Colors.accent} onPress={() => signInWithPhone()} >
        UPDATE
      </Button>
      </KeyboardAvoidingView>
  );
};

SignInWithPhoneModal.propTypes = {
};

export default SignInWithPhoneModal;
