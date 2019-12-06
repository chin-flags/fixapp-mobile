/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-paper';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
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
});

const HomeHeader = ({ navigation, user }) => {
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
          <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Profile')}>
            <Image
              style={styles.avatar}
              source={{ uri: 'https://randomuser.me/api/portraits/women/32.jpg' }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ position: 'absolute',width:'60%', bottom: 20, alignSelf: 'center' }}>
      <Button
          mode='outlined'
          color={Colors.white}
          style={{borderWidth:0.5, borderColor: '#FFC107'}}
          onPress={() => navigation.navigate('Dashboard')}
        >
          Dashboard
        </Button>
        <Button
          mode='outlined'
          color={Colors.white}
          style={{borderWidth:1, borderColor: '#FFC107'}}
          onPress={() => navigation.navigate('EquipmentSelector')}
        >
          New Notification
        </Button>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth,
})

export default connect(mapStateToProps)(withNavigation(HomeHeader));
