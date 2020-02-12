/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import WorkOrderSummaryItem from './WorkOrderSummaryItem';
import ImageGallery from '../ImageGallery';

const WorkOrderSummary = ({ workOrder }) => {
  const {
    location,
    tags,
    issueDetails,
    images,
  } = workOrder;

  return (
    <View>
      <WorkOrderSummaryItem icon="enviromento">
        <Text style={{ marginLeft: 20, fontSize: 14, fontFamily: 'notosans-regular' }}>{location}</Text>
      </WorkOrderSummaryItem>
      <WorkOrderSummaryItem icon="bars" >
        <Text style={{ marginLeft: 20, fontSize: 14, fontFamily: 'notosans-regular' }}>{issueDetails}</Text>
      </WorkOrderSummaryItem>
      <WorkOrderSummaryItem icon="tagso">
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {
            tags && tags.map((tag) => (
              <View
                key={tag}
                style={{
                  marginLeft: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 20,
                  backgroundColor: '#374F6C',
                  borderRadius: 20,
                }}
              >
                <Text style={{ color: 'white' }}>{tag}</Text>
              </View>
            ))
          }
        </View>
      </WorkOrderSummaryItem>
      <WorkOrderSummaryItem icon="picture">
        <View style={{ paddingHorizontal: 20, flexDirection: 'row' }}>
          <ImageGallery images={images} />
        </View>
      </WorkOrderSummaryItem>
    </View>
  );
};

WorkOrderSummary.propTypes = {
  workOrder: PropTypes.object.isRequired,
};

export default WorkOrderSummary;
