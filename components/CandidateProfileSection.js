import React from 'react';
import { View, Text } from 'react-native';

const CandidateProfileSection = (props) =>
    <View style={{}}>
        <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                {props.title}
            </Text>
        </View>
        {props.children}
    </View>

export default CandidateProfileSection;
