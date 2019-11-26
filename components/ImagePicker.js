/* eslint-disable react/jsx-filename-extension */
import * as imagePicker from 'expo-image-picker';

const pickImage = async (update, setUpdate) => {
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

export default pickImage;
