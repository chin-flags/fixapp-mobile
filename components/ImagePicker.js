/* eslint-disable react/jsx-filename-extension */
import * as imagePicker from 'expo-image-picker';

export const pickImageFromGallery = async (update, setUpdate) => {
  const result = await imagePicker.launchImageLibraryAsync({
    mediaTypes: imagePicker.MediaTypeOptions.All,
    aspect: [4, 3],
  });
  if (!result.cancelled) {
    setUpdate({
      ...update,
      images: [...update.images, { uri: result.uri }],
    });
  }
};

export const pickImageFromCamera = async (update, setUpdate) => {
  const result = await imagePicker.launchCameraAsync({
    mediaTypes: imagePicker.MediaTypeOptions.All,
    aspect: [4, 3],
  });
  if (!result.cancelled) {
    setUpdate({
      ...update,
      images: [...update.images, { uri: result.uri }],
    });
  }
};
