import React from 'react';
import 'react-native-gesture-handler';
import {
  Platform, StatusBar, StyleSheet, View
} from 'react-native';

import AppNavigator from './navigation/AppNavigator';

export default () => (
  <View style={styles.container}>
    {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
    <AppNavigator />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
