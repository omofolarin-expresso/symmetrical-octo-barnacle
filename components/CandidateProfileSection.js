import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const CandidateProfileSection = ({ title, children }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            {children}
        </View>
    )
};

export default CandidateProfileSection;

const styles = StyleSheet.create({
    container: {},
    titleContainer: { alignItems: "center" },
    title: {
        fontSize: 18,
        fontWeight: "bold"
    },
});


