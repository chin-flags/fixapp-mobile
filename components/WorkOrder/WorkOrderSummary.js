/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import WorkOrderSummaryItem from './WorkOrderSummaryItem';

const WorkOrderSummary = ({ workOrder }) => {
  const {
    location,
    tags,
    issueDetails,
    images,
  } = workOrder;

  return (
    <View>
      <WorkOrderSummaryItem icon="enviromento" text={location} />
      <WorkOrderSummaryItem icon="bars" text={issueDetails} />
      <WorkOrderSummaryItem icon="tagso" tags={tags} />
      <WorkOrderSummaryItem icon="picture" images={images} />
    </View>
  );
};

WorkOrderSummary.propTypes = {
  workOrder: PropTypes.object.isRequired,
};

export default WorkOrderSummary;
