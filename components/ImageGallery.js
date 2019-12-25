/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import GallerySwiper from 'react-native-gallery-swiper';
import Layout from '../constants/Layout';


const ImageGallery = ({ images }) => {
  const [state, setState] = useState({
    modalVisible: false,
    selectedImg: 0,
  });

  const imageSize = (Layout.window.width - Layout.sizes.padding * 4 - 5 * 4) / 2;
  const imageContainerWidth = (Layout.window.width - Layout.sizes.padding * 4);
  return (
    <View style={{ height: null }}>
      <View
        style={{ flexWrap: 'wrap', flexDirection: 'row', width: imageContainerWidth }}
      >
        {
            images && images.map((image, index) => (
              <TouchableOpacity
                key={image.uri}
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
      <Modal animationType="slide" transparent={false} visible={state.modalVisible}>
        <GallerySwiper
          images={images}
          initialPage={state.selectedImg}
        />
        <Button
          onPress={() => setState({
            ...state,
            modalVisible: false,
          })}
        >
          Cancel
        </Button>
      </Modal>
    </View>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
export default ImageGallery;
