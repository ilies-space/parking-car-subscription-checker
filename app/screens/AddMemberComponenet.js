import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';

export default function AddMemberModalComponenet({
  setAddMemberModal,
  addNewMember,
}) {
  return (
    <View>
      <Button title={'close'} onPress={() => setAddMemberModal(false)} />
      <Text>AddMember</Text>
      <TextInput placeholder={'Full name'} />

      <Button
        title={'save'}
        onPress={() => {
          addNewMember({
            fullName: 'ilies ouldm',
            carLicenceNumber: '123456',
            carModel: 'bmw',
            id: Math.random(),
          });
          setAddMemberModal(false);
        }}
      />
    </View>
  );
}
