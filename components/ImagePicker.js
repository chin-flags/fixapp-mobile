/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import * as imagePicker from 'expo-image-picker';
import PropTypes from 'prop-types';

import ImageGallery from './ImageGallery';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';

const ImagePicker = ({ update, setUpdate }) => {
  const [pickerVisible, setPickerVisible] = useState(false);
  const pickImageFromGallery = async () => {
    const result = await imagePicker.launchImageLibraryAsync({
      mediaTypes: imagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
    });
    setPickerVisible(false);
    if (!result.cancelled) {
      setUpdate({
        ...update,
        images: [...update.images, { uri: result.uri }],
      });
    }
  };

  const pickImageFromCamera = async () => {
    const result = await imagePicker.launchCameraAsync({
      mediaTypes: imagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
    });
    setPickerVisible(false);
    if (!result.cancelled) {
      setUpdate({
        ...update,
        images: [...update.images, { uri: result.uri }],
      });
    }
  };

  return (
    <View style={{
      padding: Layout.sizes.padding,
      borderWidth: 1,
      borderColor: Colors.borderColor,
      borderRadius: Layout.sizes.radius,
      marginTop: 15,
    }}
    >
      <Button
        style={{ borderColor: Colors.accent, borderStyle: 'dashed' }}
        mode="outlined"
        color={Colors.accent}
        onPress={() => setPickerVisible(true)}
      >
        <Text style={{ color: 'black', fontSize: Layout.sizes.font }}>
            ADD PHOTOS
        </Text>
      </Button>
      {
        pickerVisible && (
          <View style={{ flexDirection: 'row', width: '100%' }}>
            <Button mode="text" color={Colors.accent} icon="photo-camera" onPress={() => pickImageFromCamera()}>
              Camera
            </Button>
            <Button mode="text" color={Colors.accent} icon="insert-photo" onPress={() => pickImageFromGallery()}>
              Gallery
            </Button>
          </View>
        )
      }
      {
        update.images && <ImageGallery images={update.images} />
      }
    </View>
  );
};

ImagePicker.propTypes = {
  update: PropTypes.object.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default ImagePicker;
