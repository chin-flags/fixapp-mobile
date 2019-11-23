/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';
import layout from '../constants/Layout';
import NewNotificationHeader from '../components/Headers/NewNotificationHeader';
import EquipmentBarCodeScanner from '../components/EquipmentBarCodeScanner';
import IssueSelector from '../components/IssueSelector';
import ImagePicker from '../components/ImagePicker';
import CustomButton from '../components/CustomButton/CustomButton';
import Colors from '../constants/Colors';

const CreateNotification = () => {
  const [issue, setIssue] = useState({
    category: '',
    desc: '',
    comments: '',
  });
  const [modalVisible, setVisible] = useState(true);

  const equipment = useNavigationParam('equipment');
  return (
    <View style={{ flex: 1 }}>
      <Modal visible={false}>
        <EquipmentBarCodeScanner
          modalVisible={modalVisible}
          setVisible={setVisible}
        />
      </Modal>
      <ScrollView>
        <View style={{ paddingHorizontal: layout.sizes.padding }}>
          <View
            style={{
              borderRadius: 10,
              borderWidth: 1,
              padding: 20,
              borderColor: Colors.borderColor,
            }}
          >
            <Text
              style={{
                fontFamily: 'notosans-regular',
                fontWeight: 'bold',
                fontSize: 14,
              }}
            >
              EQUIPMENT
            </Text>
            <View style={{ alignItems: 'center' }}>
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
                onPress={() => setVisible(true)}
              >
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: 'bold',
                    fontFamily: 'notosans-regular',
                  }}
                >
                  Change Equipment
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {equipment !== undefined ? (
            <View>
              <View>
                <Text
                  style={{
                    fontFamily: 'notosans-regular',
                    fontWeight: 'bold',
                    fontSize: 14,
                  }}
                >
                  ISSUE
                </Text>
                <IssueSelector
                  issues={equipment.possibleIssues}
                  issue={issue}
                  setIssue={setIssue}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: 'notosans-regular',
                    fontWeight: 'bold',
                    fontSize: 14,
                  }}
                >
                  IMAGES
                </Text>
                <ImagePicker />
              </View>
            </View>
          ) : null}
        </View>
      </ScrollView>
      <CustomButton title="CRATE NOTIFICATION" />
    </View>
  );
};

CreateNotification.navigationOptions = {
  header: <NewNotificationHeader />,
};

export default CreateNotification;
