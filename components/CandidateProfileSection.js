import React from 'react';
import { Text, View } from 'react-native';

const CandidateProfileSection = ({title, ...props}) => (
  <View style={{}}>
    <View style={{
      alignItems: 'center'
    }}>
      <Text style={{
        fontSize: 18,
        fontWeight: 'bold'
      }}>
        {title}
      </Text>
    </View>
    {props.children}
  </View>
);

export default CandidateProfileSection;
