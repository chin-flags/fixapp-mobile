/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3E5B79',
    borderBottomRightRadius: Layout.sizes.padding,
    borderBottomLeftRadius: Layout.sizes.padding,
    height: Layout.window.height / 3,
  },
  titile: {
    fontFamily: 'notosans-bold',
    color: Colors.black,
    fontSize: Layout.sizes.font * 2,
    fontWeight: '600',
  },
  avatar: {
    width: Layout.sizes.padding * 1.5,
    height: Layout.sizes.padding * 1.5,
    borderRadius: (Layout.sizes.padding * 1.5) / 2,
  },
  active_button: {
    borderColor: Colors.accent,
    borderWidth: 2,
  },
});

const AuthHeader = ({ signInActive, setSignInActive }) => (
  <View style={styles.container}>
    <View
      style={{
        marginTop: Layout.sizes.padding * 1.5,
        marginHorizontal: Layout.sizes.padding,
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text
            style={{
              fontSize: 26,
              color: 'white',
              fontFamily: 'notosans-bold',
            }}
          >
            Hi There
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: 'white',
              fontFamily: 'notosans-bold',
            }}
          >
            let's get started
          </Text>
        </View>
      </View>
    </View>
    <View style={{
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      position: 'absolute',
      bottom: Layout.sizes.padding / 2,
    }}
    >
      <Button
        style={[{
          width: '30%',
          marginRight: Layout.sizes.margin / 2,
        },
        !signInActive ? styles.active_button : {}]}
        mode="outlined"
        color={Colors.accent}
        onPress={() => {
          setSignInActive(false);
        }}
      >
        <Text style={{ color: 'white', fontSize: Layout.sizes.font }}>
          SIGN UP
        </Text>
      </Button>
      <Button
        style={[{ width: '30%' }, signInActive ? styles.active_button : {}]}
        mode="outlined"
        color={Colors.accent}
        onPress={() => {
          setSignInActive(true);
        }}
      >
        <Text style={{ color: 'white', fontSize: Layout.sizes.font }}>
          SIGN IN
        </Text>
      </Button>
    </View>
  </View>
);


AuthHeader.propTypes = {
  signInActive: PropTypes.bool.isRequired,
  setSignInActive: PropTypes.func.isRequired,
};

export default AuthHeader;
