/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import SimpleButton from './App/Components/SimpleButton';

export default class ReactNotes extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SimpleButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('ReactNotes', () => ReactNotes);
