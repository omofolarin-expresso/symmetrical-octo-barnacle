import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const CandidateProfileSectionEntry = ({ title, info }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`${title}:`}</Text>
            <Text style={styles.info}>{info}</Text>
        </View>
    )
};

export default CandidateProfileSectionEntry;

const styles = StyleSheet.create({
    container: { padding: 8 },
    title: {
        fontSize: 12,
        fontWeight: "bold"
    },
    info: { fontSize: 18 },
});

