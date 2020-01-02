/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/self-closing-comp */
import React, { useState } from "react";
import { View, Text, Picker, TextInput } from "react-native";
import PropTypes from "prop-types";
import { Button } from "react-native-paper";

import ImagePicker from "../ImagePicker";
import Layout from "../../constants/Layout";
import Colors from "../../constants/Colors";

import { status, workOrders } from "../../mock/mockdata";

const UpDateStatusModal = ({ workOrder, currentStatus, onClose }) => {
  const [update, setUpdate] = useState({
    type: currentStatus,
    comments: "",
    images: []
  });
  const submitUpdate = () => {
    // aync call to firestore; for now just change mock data
    workOrders.find(wo => wo.id === workOrder.id).status = update.status;
    onClose();
  };

  return (
    <View style={{ padding: Layout.sizes.padding, zIndex: 100 }}>
      <Text
        style={{
          fontSize: 20,
          color: Colors.black,
          fontFamily: "notosans-bold"
        }}
      >
        Anything new?
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: Colors.black,
          fontFamily: "notosans-bold"
        }}
      >
        update it here
      </Text>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: Layout.sizes.radius,
          borderWidth: 1,
          borderColor: Colors.borderColor,
          marginTop: 15,
          overflow: "hidden"
        }}
      >
        <Picker
          selectedValue={update.type}
          onValueChange={value => setUpdate({ ...update, type: value })}
          itemStyle={{ fontSize: 16, fontFamily: "notosans-regular" }}
          style={{ padding: 10 }}
        >
          {status.map(s => (
            <Picker.Item key={s.id} value={s.name} label={s.name} />
          ))}
        </Picker>
      </View>
      <TextInput
        value={update.comments}
        multiline
        placeholder="Comments"
        style={{
          backgroundColor: "white",
          borderRadius: Layout.sizes.radius,
          borderWidth: 1,
          borderColor: Colors.borderColor,
          marginTop: 15,
          padding: 10,
          fontSize: 16,
          fontFamily: "notosans-regular"
        }}
        onChangeText={text => setUpdate({ ...update, comments: text })}
      />
      <ImagePicker update={update} setUpdate={setUpdate} />
      <Button
        style={{
          borderColor: Colors.accent,
          borderWidth: 1,
          borderRadius: 10,
          marginTop: 15
        }}
        mode="outlined"
        color={Colors.accent}
        onPress={() => submitUpdate()}
      >
        <Text style={{ color: "black", fontSize: Layout.sizes.font }}>
          UPDATE
        </Text>
      </Button>
    </View>
  );
};

UpDateStatusModal.propTypes = {
  currentStatus: PropTypes.string.isRequired,
  workOrder: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
};

export default UpDateStatusModal;
