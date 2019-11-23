/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import layout from '../../constants/Layout';
import colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    height: layout.window.height / 6,
  },
  titile: {
    fontFamily: 'notosans-bold',
    color: colors.black,
    fontSize: layout.sizes.font * 2,
    fontWeight: '600',
  },
  avatar: {
    width: layout.sizes.padding * 1.5,
    height: layout.sizes.padding * 1.5,
    borderRadius: (layout.sizes.padding * 1.5) / 2,
  },
});

const NewNotificationHeader = () => (
  <View style={styles.container}>
    <View
      style={{
        marginTop: layout.sizes.padding * 1.5,
        marginHorizontal: layout.sizes.padding,
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text
          style={{
            fontSize: 24,
            color: 'black',
            fontFamily: 'notosans-bold',
          }}
        >
        New Notification
        </Text>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://randomuser.me/api/portraits/women/32.jpg' }}
        />
      </View>
    </View>
  </View>
);


export default NewNotificationHeader;
