import React from 'react';
import {Button, Text, View} from 'react-native';

export default function Home({navigation}) {
  return (
    <View>
      <Text>HOME</Text>

      <Button
        title={'scan car'}
        onPress={() => {
          navigation.push('ScanLicense');
        }}
      />

      <Button
        title={'subscribed members list'}
        onPress={() => {
          navigation.push('ManageMembers');
        }}
      />
    </View>
  );
}
