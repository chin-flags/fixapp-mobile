/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-paper';
import useForm from 'react-hook-form';
import { useFirebase } from '../../hooks/useFirebase';
import { emailRegEx } from '../../constants/Strings';
import Colors from '../../constants/Colors';

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
  const [formError, setFormError] = useState(null);

  const {
    register,
    setValue,
    errors,
    handleSubmit,
  } = useForm(
    defaultValues,
  );
  const { signin } = useFirebase();
  return (
    <ScrollView style={{ width: '100%' }}>
      <TextInput
        style={{
          ...styles.text_input,
          borderBottomColor: errors.email ? 'red' : '#80cbc4',
          fontFamily: 'notosans-bold',
        }}
        placeholder="EMAIL"
        keyboardType="email-address"
        ref={register({ name: 'email' }, { required: true, pattern: emailRegEx })}
        autoCompleteType="email"
        onChangeText={(text) => {
          setFormError(null);
          setValue('email', text, true);
        }}
      />
      <Text style={styles.field_error_text}>
        {errors.email
        && errors.email.type === 'required'
          && 'Email is Required'}
        {errors.email
        && errors.email.type === 'pattern'
        && 'Email is not valid'}
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
        ref={register({ name: 'password' }, { required: true })}
        onChangeText={(text) => {
          setFormError(null);
          setValue('password', text, true);
        }}
      />
      <Text style={styles.field_error_text}>
        {errors.password
        && errors.password.type === 'required'
        && 'Password is Required'}
      </Text>
      {
        formError && (
          <Text style={styles.error_text}>
            {formError}
          </Text>
        )
      }
      <Button
        mode="outlined"
        loading={loading}
        color={Colors.black}
        style={{ borderWidth: 2, borderColor: '#3E5B79' }}
        onPress={handleSubmit(({ email, password }) => {
          setLoading(true);
          signin(email, password)
            .then(() => {
              setLoading(false);
              setFormError(null);
              navigation.navigate('Main');
            })
            .catch((err) => {
              let error;
              switch (err.code) {
                case 'auth/user-not-found':
                  error = 'User not found';
                  break;
                case 'auth/wrong-password':
                  error = 'Wrong credentials, try again';
                  break;
                default:
                  error = 'somthing went wrong !';
                  break;
              }
              setFormError(error);
              setLoading(false);
            });
        })}
      >
        <Text style={styles.button_text}>SUBMIT</Text>
      </Button>
    </ScrollView>
  );
};

SignInWithEmailForm.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default withNavigation(SignInWithEmailForm);
