/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import { Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import IssueSelector from '../components/IssueSelector';
import ImagePicker from '../components/ImagePicker';
import CreateNotificationCard from '../components/WorkOrder/CreateWorkOrderCard';
import CreateNotificationHeader from '../components/Headers/CreateNotificationHeader';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';

const CreateNotification = ({ navigation }) => {
  const [issue, setIssue] = useState({
    category: '',
    desc: '',
    comments: '',
    images:[],
  });

  const equipment = navigation.getParam('equipment');
  return (
    <View style={{ flex: 1, paddingHorizontal: Layout.sizes.padding, paddingBottom: 20 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 15 }}>
        <CreateNotificationCard
          title="EQUIPMENT"
          icon={(
            <AntDesign
              name="edit"
              size={24}
            />
          )}
        >
          <View style={{ alignItems: 'center', flexDirection: 'row'}}>
            {equipment !== undefined ? (
              <Text style={{ fontFamily: 'notosans-regular', fontSize: 16 }}>
                {equipment.name}
              </Text>
            ) : null}
          </View>
        </CreateNotificationCard>
        <CreateNotificationCard
          title="ISSUE"
        >
          {equipment !== undefined ? (
            <View>
              <View>
                <IssueSelector
                  issues={equipment.possibleIssues}
                  issue={issue}
                  setIssue={setIssue}
                />
              </View>
            </View>
          ) : null}
        </CreateNotificationCard>
        <ImagePicker update={issue} setUpdate={setIssue} />
      </ScrollView>
      <Button
        style={{ borderColor: Colors.accent, borderWidth: 1, borderRadius: 10 }}
        mode="outlined"
        color={Colors.accent}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Text style={{ color: 'black', fontSize: Layout.sizes.font }}>
            DONE
        </Text>
      </Button>
    </View>
  );
};

CreateNotification.navigationOptions = {
  header: <CreateNotificationHeader />,
};

CreateNotification.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default CreateNotification;
