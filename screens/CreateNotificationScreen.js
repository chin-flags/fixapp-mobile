/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import NewNotificationHeader from '../components/Headers/NewNotificationHeader';
import IssueSelector from '../components/IssueSelector';
import ImagePicker from '../components/ImagePicker';
import CustomButton from '../components/CustomButton/CustomButton';
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
                {equipment.text}
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
        <CreateNotificationCard
          title="IMAGES"
          icon={(
            <MaterialIcons
              name="add-a-photo"
              size={24}
            />
          )}
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
