/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';
import NewNotificationHeader from '../components/Headers/NewNotificationHeader';
import IssueSelector from '../components/IssueSelector';
import ImagePicker from '../components/ImagePicker';
import CustomButton from '../components/CustomButton/CustomButton';
import Colors from '../constants/Colors';
import { equipments } from '../mock/mockdata';
import CreateNotificationCard from '../components/WorkOrder/CreateWorkOrderCard';
import Layout from '../constants/Layout';

const CreateNotification = () => {
  const [issue, setIssue] = useState({
    category: '',
    desc: '',
    comments: '',
  });

  //const equipment = useNavigationParam('equipment');
  const equipment = equipments[0];
  return (
    <View style={{ flex: 1, paddingHorizontal: Layout.sizes.padding, paddingBottom: 20 }}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <CreateNotificationCard
          title="EQUIPMENT"
        >
          <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
            {equipment !== undefined ? (
              <Text style={{ fontFamily: 'notosans-regular', fontSize: 16 }}>
                {equipment.text}
              </Text>
            ) : null}
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                height: 30,
                paddingHorizontal: 10,
                backgroundColor: '#E86E57',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 5,
              }}
              onPress={() => {}}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: 'bold',
                  fontFamily: 'notosans-regular',
                }}
              >
                Change
              </Text>
            </TouchableOpacity>
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
        <CreateNotificationCard
          title="IMAGES"
        >
          <ImagePicker />
        </CreateNotificationCard>
      </ScrollView>
      <CustomButton title="CRATE NOTIFICATION" />
    </View>
  );
};

CreateNotification.navigationOptions = {
  header: <NewNotificationHeader />,
};

export default CreateNotification;
