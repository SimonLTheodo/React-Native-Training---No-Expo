import {Text, View} from 'react-native';
import React from 'react';

export default function PlatformSpecificComponent(): JSX.Element {
  return (
    <View>
      <Text>You're on IOS!</Text>
    </View>
  );
}
