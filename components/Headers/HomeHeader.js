/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3E5B79',
    borderBottomRightRadius: Layout.sizes.padding,
    borderBottomLeftRadius: Layout.sizes.padding,
    height: Layout.window.height / 3,
  },
  title: {
    fontFamily: 'notosans-bold',
    color: Colors.white,
    fontSize: 26,
  },
  buttonContainer: {
    position: 'absolute',
    width: '70%',
    bottom: 20,
    alignSelf: 'center',
  },
  button: {
    borderColor: Colors.accent,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
  },
  avatar: {
    width: Layout.sizes.padding * 1.5,
    height: Layout.sizes.padding * 1.5,
    borderRadius: (Layout.sizes.padding * 1.5) / 2,
  },
});

const HomeHeader = ({ navigation }) => (
  <View style={styles.container}>
    <View
      style={{
        marginTop: Layout.sizes.padding * 1.5,
        marginHorizontal: Layout.sizes.padding,
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text
          style={styles.title}
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
    <View style={styles.buttonContainer}>
      <Button
        style={{ borderColor: Colors.accent, borderWidth: 1, borderRadius: 10 }}
        mode="outlined"
        color={Colors.accent}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Text style={{ color: 'white', fontSize: Layout.sizes.font }}>
          DASHBOARD
        </Text>
      </Button>
      <Button
        style={styles.button}
        mode="outlined"
        color={Colors.accent}
        onPress={() => navigation.navigate('EquipmentSelector')}
      >
        <Text style={{ color: 'white', fontSize: Layout.sizes.font }}>
          NEW NOTIFICATION
        </Text>
      </Button>
    </View>
  </View>
);

const mapStateToProps = (state) => ({
  user: state.auth,
});

HomeHeader.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withNavigation(HomeHeader));
