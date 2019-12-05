/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-undef */
import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-paper';
import useForm from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth'
import { emailRegEx } from '../../constants/Strings';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';

const styles = StyleSheet.create({
  text_input: {
    borderBottomWidth: 1,
    paddingHorizontal: 5,
  },
  button_text: {
    fontSize: 16,
    marginLeft: 10,
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

const SignInWithEmailForm = ({ navigation }) => {
  const defaultValues = {
    email: '',
    password: '',
  };

  const [loading, setLoading] = useState(false);
  const {register, unregister, setValue, errors, watch, handleSubmit} = useForm(
    defaultValues,
  );

  const auth = useAuth();

  return (
    <View style={{width:'100%'}}>
       
      <TextInput
        style={{
          ...styles.text_input,
          borderBottomColor: errors.email ? 'red' : '#80cbc4',
          fontFamily: 'notosans-bold',
        }}
        placeholder="EMAIL"
        keyboardType="email-address"
        ref={register({name: 'email'}, {required: true, pattern: emailRegEx})}
        autoCompleteType="email"
        onChangeText={text => {
          auth.setError('');
          setValue('email', text, true);
        }}
      />
      <Text style={styles.field_error_text}>
        {errors.email &&
          errors.email.type === 'required' &&
          'Email is Required'}
        {errors.email &&
          errors.email.type === 'pattern' &&
          'Email is not valid'}
      </Text>
      <TextInput
        style={{
          ...styles.text_input,
          fontFamily: 'notosans-bold',
          borderBottomColor: errors.password ? 'red' : '#80cbc4',
        }}
        placeholder="PASSWORD"
        secureTextEntry
        autoCompleteType="password"
        ref={register({name: 'password'}, {required: true})}
        onChangeText={text => {
          auth.setError('');
          setValue('password', text, true);
        }}
      />
      <Text style={styles.field_error_text}>
        {errors.password &&
          errors.password.type === 'required' &&
          'Password is Required'}
      </Text>
      <Button
        mode='outlined'
        color={Colors.black}
        style={{borderWidth:2, borderColor: '#3E5B79' }}
        onPress={() => navigation.navigate('Main')}
      >
        <Text style={styles.button_text}>SUBMIT</Text>
      </Button>
    </View>
  );
};

export default withNavigation(SignInWithEmailForm);
