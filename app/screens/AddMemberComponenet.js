import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

export default function AddMemberModalComponenet({
  setAddMemberModal,
  addNewMember,
}) {
  const [fullName, setfullName] = useState('');
  const [carLicence, setcarLicence] = useState('');
  const [carModel, setcarModel] = useState('');

  function checkThenAddMember() {
    if (fullName !== '' && carLicence !== '' && carModel !== '') {
      addNewMember({
        fullName: fullName,
        carLicenceNumber: carLicence,
        carModel: carModel,
        id: Math.random().toString(),
      });
      setAddMemberModal(false);
    } else {
      alert('wrong data input , please check and try again ! ');
    }
  }
  return (
    <View>
      <Button title={'close'} onPress={() => setAddMemberModal(false)} />
      <Text>AddMember</Text>
      <TextInput
        placeholder={'Full name'}
        onChangeText={value => {
          setfullName(value);
        }}
        value={fullName}
      />

      <TextInput
        placeholder={'carLicence'}
        onChangeText={value => {
          setcarLicence(value);
        }}
        value={carLicence}
      />
      <TextInput
        placeholder={'carModel'}
        onChangeText={value => {
          setcarModel(value);
        }}
        value={carModel}
      />
      <Button
        title={'save'}
        onPress={() => {
          checkThenAddMember();
        }}
      />
    </View>
  );
}
