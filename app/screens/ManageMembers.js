import React, {useEffect, useState} from 'react';
import {Button, FlatList, Modal, Text, View} from 'react-native';
import AddMemberModalComponenet from './AddMemberComponenet';
// import AddMemberModalComponenet from './AddMemberModalComponenet';

export default function ManageMembers() {
  const [AddMemberModal, setAddMemberModal] = useState(false);
  const [members, setmembers] = useState([]);

  function addNewMember(MemberInfo) {
    console.log({MemberInfo});
    setmembers(oldList => {
      return [...oldList, MemberInfo];
    });
    // setmembers(...members, MemberInfo);
  }

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
      <Button title={'add new one'} onPress={() => setAddMemberModal(true)} />
      <FlatList renderItem={renderMembers} data={members} />
      <Modal visible={AddMemberModal}>
        <AddMemberModalComponenet
          setAddMemberModal={setAddMemberModal}
          addNewMember={addNewMember}
        />
      </Modal>
    </View>
  );
}
