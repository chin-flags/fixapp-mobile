/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';

const styles = StyleSheet.create({
  text_input: {
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    marginTop: Layout.sizes.margin,
  },
  button_text: {
    fontSize: 16,
  },
  error_text: {
    fontSize: 18,
    color: 'red',
    fontWeight: '500',
    alignSelf: 'center',
  },
  field_error_text: {
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
  },
});

const SignInWithEmailForm = ({ onOpen }) => (
  <View style={{ width: '100%', marginTop: Layout.sizes.margin / 2 }}>
    <Button
      mode="outlined"
      color={Colors.black}
      style={{ borderWidth: 2, borderColor: '#3E5B79' }}
      onPress={() => onOpen()}
    >
      <Text style={styles.button_text}>SIGN IN WITH PHONE</Text>
    </Button>
  </View>
);


SignInWithEmailForm.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default SignInWithEmailForm;
