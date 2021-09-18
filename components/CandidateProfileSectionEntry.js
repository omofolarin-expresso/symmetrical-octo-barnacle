import React from 'react';
import { View, Text } from 'react-native';

const CandidateProfileSectionEntry = ({ title, info }) => <View>
    <Text>{title}: {info}</Text>
</View>;

export default CandidateProfileSectionEntry;
