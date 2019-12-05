/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View } from 'react-native';

import SignInWithEmailForm from './SignInWithEmailForm';
import SIgnInWithPhone from './SignInWithPhone';

const SignIn = ({ onOpen }) => (
  <View style={{width:'100%'}}>
    <SignInWithEmailForm/>
    <SIgnInWithPhone  onOpen={onOpen} />
  </View>
);

export default SignIn;
