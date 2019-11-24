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
import Layout from '../../constants/Layout';
import colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3E5B79',
    borderBottomRightRadius: Layout.sizes.padding,
    borderBottomLeftRadius: Layout.sizes.padding,
    height: Layout.window.height / 3,
  },
  titile: {
    fontFamily: 'notosans-bold',
    color: colors.black,
    fontSize: Layout.sizes.font * 2,
    fontWeight: '600',
  },
  avatar: {
    width: Layout.sizes.padding * 1.5,
    height: Layout.sizes.padding * 1.5,
    borderRadius: (Layout.sizes.padding * 1.5) / 2,
  },
});

const HomeHeader = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: Layout.sizes.padding * 1.5,
          marginHorizontal: Layout.sizes.padding,
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
      <View style={{ position: 'absolute', bottom: 20, left: Layout.sizes.padding }}>
        <CustomButton
          title="New Notification"
          onPress={() => navigate('EquipmentSelector')}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
