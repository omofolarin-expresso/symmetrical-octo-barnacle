import React from 'react';
import { View, Text } from 'react-native';

const CandidateProfileSectionEntry = (props) =>
    <View style={{padding: 8}}>
        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
            {props.title + ':'}
        </Text>
        <Text style={{fontSize: 18}}>{props.info}</Text>
    </View>;

export default CandidateProfileSectionEntry;
