/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Button } from 'react-native-paper';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import IssueSelector from '../components/IssueSelector';
import ImagePicker from '../components/ImagePicker';
import { equipments } from '../mock/mockdata';
import CreateNotificationCard from '../components/WorkOrder/CreateWorkOrderCard';
import CreateNotificationHeader from '../components/Headers/CreateNotificationHeader';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';

const CreateNotification = () => {
  const [issue, setIssue] = useState({
    category: '',
    desc: '',
    comments: '',
    images:[],
  });

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
        <ImagePicker update={issue} setUpdate={setIssue}/>
      </ScrollView>
      <Button
        mode='outlined'
        color={Colors.accent}
        dark={false}
        onPress={() => navigate('createNotification', {
          equipment: state.selectedEquipment,
        })}
      >
        DONE
      </Button>
    </View>
  );
};

CreateNotification.navigationOptions = {
  header: <CreateNotificationHeader />,
};

export default CreateNotification;
