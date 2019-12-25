/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import
{
  View,
  ActivityIndicator,
} from 'react-native';

import { useFirebase } from '../hooks/useFirebase';

const AuthLoadingScreen = ({ navigation }) => {
  const { authUser, initializing } = useFirebase();

  useEffect(() => {
    if (!initializing) {
      navigation.navigate(authUser ? 'Main' : 'Auth');
    }
  }, [initializing]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator />
    </View>
  );
};

AuthLoadingScreen.navigationOptions = {
  header: null,
};

AuthLoadingScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default AuthLoadingScreen;
