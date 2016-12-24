import React from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class SimpleButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={ () => console.log('Pressed!') }>
        <View>
          <Text>SimpleButton</Text>
        </View>
      </TouchableOpacity>
    );
  }
}