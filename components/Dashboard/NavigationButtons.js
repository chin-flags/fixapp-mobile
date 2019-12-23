/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Layout from '../../constants/Layout';

const NavigationButtons = ({
  renderIcon,
  getLabelText,
  activeTintColor,
  inactiveTintColor,
  onTabPress,
  navigation
}) => {
  const { routes, index: activeRouteIndex } = navigation.state;
  return (
    <View style={{ flexDirection: 'row', marginTop: Layout.sizes.margin }}>
      {
        routes.map((route, routeIndex) => {
          const isRouteActive = routeIndex === activeRouteIndex;
          const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
          return (
            <TouchableOpacity
              onPress={() => {
                onTabPress({ route });
              }}
              activeOpacity={0.8}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
              }}
            >
              {renderIcon({ route, focused: isRouteActive, tintColor })}
              <Text style={{ fontFamily: 'notosans-bold', marginTop: 5 }}>
                {getLabelText({ route })}
              </Text>
            </TouchableOpacity>
          );
        })
      }
    </View>
  );
};

export default NavigationButtons;
