/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View,
  Button,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import GallerySwiper from 'react-native-gallery-swiper';
import * as imagePicker from 'expo-image-picker';
import layout from '../constants/Layout';

const ImagePicker = () => {
  const [state, setState] = useState({
    images: [],
    modalVisible: false,
    selectedImg: '',
  });

  const pickImage = async () => {
    const result = await imagePicker.launchImageLibraryAsync({
      mediaTypes: imagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      setState({
        ...state,
        images: [...state.images, { uri: result.uri }],
      });
    }
  };

  const imageSize = (layout.window.width - layout.sizes.padding * 2 - 5 * 6) / 3;
  return (
    <View style={{ flex: 1 }}>
      <Button title="Pick Image" onPress={() => pickImage()} />
      { state.images && (
        <View
          style={{ flexWrap: 'wrap', flexDirection: 'row', width: (layout.window.width - layout.sizes.padding * 2) }}
        >
            {
              state.images.map((image, index) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    setState({
                      ...state,
                      modalVisible: true,
                      selectedImg: index,
                    });
                  }}
                >
                  <Image
                    source={image}
                    style={{
                      width: imageSize, height: imageSize, margin: 5, borderRadius: 10,
                    }}
                  />
                </TouchableOpacity>
              ))
            }
        </View>
      )}
      <Modal animationType="slide" transparent={false} visible={state.modalVisible}>
        <GallerySwiper
          images={state.images}
          initialPage={state.selectedImg}
        />
        <Button
          title="Cancel"
          onPress={() => setState({
            ...state,
            modalVisible: false,
          })}
        />
      </Modal>
    </View>
  );
};

export default ImagePicker;
