/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

const IssueSelector = ({ issues, issue, setIssue }) => (
  <View>
    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
      {
        issues.map((i) => (
          <TouchableOpacity
            key={i.text}
            activeOpacity={0.8}
            onPress={() => setIssue({
              ...issue,
              desc: i.text,
            })}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderWidth: 0,
              borderRadius: 10,
              marginRight: 10,
              borderColor: '#808080',
              elevation: 2,
              backgroundColor: (issue.desc === i.text) ? Colors.accent : 'white',
            }}
          >
            <Text style={{
              fontFamily: 'notosans-regular',
              color: (issue.desc === i.text) ? 'white' : 'black',
            }}
            >
              {i.text}
            </Text>
          </TouchableOpacity>
        ))
            }
    </View>
    <TextInput
      value={issue.comments}
      multiline
      placeholder="Comments"
      style={{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: Layout.sizes.radius,
        borderWidth:1,
        borderColor: Colors.borderColor,
        marginVertical: 15,
      }}
      onChangeText={(text) => setIssue({ ...issue, comments: text })}
    />
  </View>
);


IssueSelector.propTypes = {
  issues: PropTypes.array.isRequired,
  issue: PropTypes.object.isRequired,
  setIssue: PropTypes.func.isRequired,
};
export default IssueSelector;
