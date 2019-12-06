import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome,  } from '@expo/vector-icons';
import Layout from '../../constants/Layout';


const navButtons = [ 
  {name: 'WorkOrders', icon: 'list-alt', color: '#9575cd' },
  {name: 'Equipments', icon: 'gears', color: '#4dd0e1' },
  {name: 'People', icon: 'users', color: '#aed581'},
];

const NavigationButtons = () => {
  const buttonDia = (Layout.window.width - Layout.sizes.padding * 2 - Layout.sizes.margin * 2) / 3;
  return (
    <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between'}}>
      {
        navButtons.map(button => (
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity activeOpacity={0.8} style={{width: 60, height: 60,justifyContent:'center', alignItems:'center', borderRadius: 30,backgroundColor: button.color }}>
              <FontAwesome name={button.icon} size={28} color="white" />
            </TouchableOpacity>
            <Text style={{ fontFamily: 'notosans-bold', marginTop: 5}} >{button.name}</Text>
          </View>
        ))
      }
    </View>
  )
}

export default NavigationButtons;
