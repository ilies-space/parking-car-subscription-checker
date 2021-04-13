import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';

export default function ManageMembers() {
  const [members, setmembers] = useState([
    {
      fullName: 'ilies ouldm',
      carLicenceNumber: '123456',
      carModel: 'bmw',
    },
  ]);

  const renderMembers = ({item}) => {
    return (
      <View
        style={{
          borderWidth: 0.5,
          margin: 10,
        }}>
        <Text>{item.fullName}</Text>
        <Text>{item.carLicenceNumber}</Text>
        <Text>{item.carModel}</Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        renderItem={renderMembers}
        keyExtractor={() => Math.random().toString()}
        data={members}
      />
    </View>
  );
}
