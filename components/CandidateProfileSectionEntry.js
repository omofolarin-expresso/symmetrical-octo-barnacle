import React from 'react';
import { Text, View } from 'react-native';

const CandidateProfileSectionEntry = ({title, info}) => (
  <View style={{
    padding: 8
  }}>
    <Text style={{
      fontSize: 12,
      fontWeight: 'bold'
    }}>
      {`${title}:`}
    </Text>
    <Text style={{
      fontSize: 18
    }}>
      {info}
    </Text>
  </View>
);

export default CandidateProfileSectionEntry;
