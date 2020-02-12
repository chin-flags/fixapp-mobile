/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import { useAuth } from '../hooks/useAuth';

const ProfileScreen = ({ navigation }) => {
  const firebase = useAuth();
  return (
    <View style={{ flex: 1 }}>
      <Text>Profile</Text>
      <Text>{firebase.authUser.email}</Text>
      <Button onPress={() => firebase.signout().then(() => navigation.navigate('Auth'))}>
        SignOut
      </Button>
    </View>
  );
};

ProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ProfileScreen;
