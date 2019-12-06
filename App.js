/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import {
  Platform, StatusBar, StyleSheet, View,
} from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Portal } from 'react-native-paper';
import { Provider } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import store from './redux/store';

// import required fonts
const notosansRegular = require('./assets/fonts/NotoSans-Regular.ttf');
const notosansBold = require('./assets/fonts/NotoSans-Bold.ttf');
const notosansBoldItalic = require('./assets/fonts/NotoSans-BoldItalic.ttf');
const notosansRegularItalic = require('./assets/fonts/NotoSans-RegularItalic.ttf');

async function loadResourcesAsync() {
  await Promise.all([
    // load other assets
    // Asset.loadAsync([
    //    require('./assets/images/background_image.png'),
    // //   require('./assets/images/robot-prod.png'),
    //  ]),
    Font.loadAsync({
      ...Ionicons.font,
      ...AntDesign.font,
      'notosans-regular': notosansRegular,
      'notosans-bold': notosansBold,
      'notosans-bold-italic': notosansBoldItalic,
      'notosans-regular-italic': notosansRegularItalic,
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const App = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }
  return (
    <Provider store={store}>
      <Portal.Host>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      </Portal.Host>
    </Provider>
  );
};

export default App;
