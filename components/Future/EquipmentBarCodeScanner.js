/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import {
  Text, View, StyleSheet, Button, Image,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import { useNavigation } from 'react-navigation-hooks';
import { Camera } from 'expo-camera';
import layout from '../../constants/Layout';

const barcodeImage = require('../assets/images/barcode.jpg');

const EquipmentBarCodeScanner = ({ setVisible }) => {
  const [state, setState] = useState({
    hasCameraPermission: null,
    scanned: false,
  });
  console.log(state);
  const { hasCameraPermission, scanned } = state;

  const { navigate } = useNavigation();

  const getPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    setState({ ...state, hasCameraPermission: status === 'granted' });
  };

  useEffect(() => { getPermissions(); }, []);

  if (hasCameraPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setState({ ...state, scanned: true });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Camera
        onBarCodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          height: 200,
          zIndex: 2,
          borderTopLeftRadius: layout.sizes.padding,
          borderTopRightRadius: layout.sizes.padding,
          backgroundColor: 'white',
        }}
      >
        {scanned
          ? (
            <View>
              <Button title="Tap to Scan Again" onPress={() => setState({ scanned: false })} />
            </View>
          )
          : (
            <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: layout.sizes.padding }}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={barcodeImage} resizeMode="contain" style={{ width: 100, height: 50 }} />
                <Text style={{
                  flex: 1, fontSize: 16, fontFamily: 'notosans-regular', paddingLeft: 10,
                }}
                >
                   Go to the equipment and scan the barcode
                </Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
                <Text style={{
                  flex: 1, fontSize: 16, fontFamily: 'notosans-regular', paddingLeft: 10,
                }}
                >
                  No Bar Code?
                </Text>
                <Button
                  title="PICK MANUALLY"
                  onPress={() => {
                    navigate('EquipmentSelector');
                    setVisible(false);
                  }}
                />
              </View>
              <Button title="CANCEL" onPress={() => setVisible(false)} />
            </View>
          )}
      </View>
    </View>
  );
};

EquipmentBarCodeScanner.navigationOptions = {
  header: null,
};

export default EquipmentBarCodeScanner;
