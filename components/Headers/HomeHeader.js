/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import CustomButton from '../CustomButton/CustomButton';
import layout from '../../constants/Layout';
import colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3E5B79',
    borderBottomRightRadius: layout.sizes.padding,
    borderBottomLeftRadius: layout.sizes.padding,
    height: layout.window.height / 3,
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

const HomeHeader = () => {
  const { navigate } = useNavigation();
  return (
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
              fontSize: 26,
              color: 'white',
              fontFamily: 'notosans-bold',
            }}
          >
            FixApp
          </Text>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://randomuser.me/api/portraits/women/32.jpg' }}
          />
        </View>
      </View>
      <CustomButton
        title="New Notification"
        onPress={() => navigate('EquipmentSelector')}
      />
    </View>
  );
};

export default HomeHeader;
