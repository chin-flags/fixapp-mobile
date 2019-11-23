/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import layout from '../constants/Layout';
import Colors from '../constants/Colors';

const IssueSelector = ({ issues, issue, setIssue }) => {
  return (
    <View style={{flex:1}}>
    <View style={{
      flexWrap: 'wrap',
      flexDirection: 'row',
      marginVertical:20}}>
      {
        issues.map((i) =>
          (
            <TouchableOpacity
              key={i.text}
              activeOpacity={0.8}
              onPress = { () => setIssue({
                ...issue,
                desc: i.text
              }) }
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 10,
                paddingVertical:5,
                borderWidth: 0,
                borderRadius:10,
                marginRight: 10,
                borderColor: '#808080',
                elevation: 5,
                backgroundColor: (issue.desc === i.text) ? Colors.accent : 'white', 
              }}
            >
              <Text style={{fontFamily: 'notosans-regular', color: (issue.desc === i.text) ? 'white' : 'black' }}>{i.text}</Text>
            </TouchableOpacity>
          ))
            }
      </View>
      <TextInput 
        value={issue.comments}
        multiline
        placeholder="Comments"
        style={{backgroundColor:'white',elevation:5,padding:10, borderRadius:10, marginVertical:20}}
        onChangeText={text => setIssue({...issue, comments: text}) }
      />
    </View>
  );
};

export default IssueSelector;
