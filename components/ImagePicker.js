/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button} from 'react-native-paper';
import * as imagePicker from 'expo-image-picker';

import ImageGallery from './ImageGallery';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';

const ImagePicker = ({ update, setUpdate }) => {

  const [pickerVisible, setPickerVisible ] = useState(false);

  pickImageFromGallery = async () => {
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
  
  pickImageFromCamera = async () => {
    const result = await imagePicker.launchCameraAsync({
      mediaTypes: imagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
    });
    setPickerVisible(false)
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
      }
    }>
        <Button mode='outlined' onPress={()=> setPickerVisible(true)} >
          ADD PHOTOS
        </Button>
        {
          pickerVisible && (
            <View  style={{ flexDirection: 'row', width: '100%'}}>
              <Button  mode='text' icon='photo-camera' onPress={() =>  pickImageFromCamera()}>
                Camera
              </Button>  
              <Button   mode='text' icon='insert-photo' onPress={() => pickImageFromGallery()} >
                Gallery
              </Button>
            </View>
          )
        }  
        {
          update.images && <ImageGallery images={update.images} />
        }
      </View>
  )
}

export default ImagePicker;
