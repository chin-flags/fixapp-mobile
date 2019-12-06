import React from 'react';
import { View,TouchableOpacity } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { Text } from 'react-native-svg';

const Labels = ({ slices, height, width}) => {
  return slices.map((slice, index) => {
    const { labelCentroid, pieCentroid, data} = slice;
    console.log(data)
    return (
      <Text
        key={index}
        x={pieCentroid[0]}
        y={pieCentroid[1]}
        fill='black'
        fontSize={16}
        alignmentBaseline='middle'
        textAnchor='middle'
      >
        {data.value}
      </Text>
    )
  })
}

const WorkOrdersDashboard = () => {
  const data = [50, 10]
    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
    const pieData = data
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: randomColor(),
                onPress: () => console.log('press', index),
            },
            key: `pie-${index}`,
        }))

  return (
    <View style={{flex: 1}}>
      <PieChart style={{height: 200, marginTop: 100}} data={pieData} innerRadius='50%'>
        <Labels/>
      </PieChart>
    </View>
  )
}

export default WorkOrdersDashboard;
