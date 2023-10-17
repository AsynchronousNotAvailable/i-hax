import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import placeholderImage from '../assets/avatar.png';
import { useNavigation} from '@react-navigation/native';

const users = [
  { id: 1, name: 'Alex', msg:'Hello!' },
  { id: 2, name: 'Maria', msg: "How are you?"},
  { id: 3, name: 'John', msg:"OMG, This is Amazing.."},
  { id: 4, name: 'Tiya', msg:"This sounds good"},
  { id: 5, name: 'Tan', msg:"Are you ok?"},
  { id: 6, name: 'Lily', msg:"Good Evening"},
];

const CommunityChat = () => {
  const navigation = useNavigation();
  const handleChat = (item) => {
    navigation.navigate('CommunityChatscreen', {username: item.name, item });
  };
  const renderUserItem = ({ item }) => (
    <TouchableOpacity
      style={styles.userItem}
      onPress={() => handleChat(item)}
    >
    <View style={styles.rowContainer}>
      <Image source={placeholderImage} style={styles.profilePic} />
      <View style={styles.textContainer}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.message}>{item.msg}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.userList}>
        <FlatList
          data={users}
          renderItem={renderUserItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    flexDirection: 'row',
  },
  userItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  userList: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
  },
  textContainer:{
    paddingLeft:25,
    paddingTop:3,
  },
  userName:{
    fontWeight: 'bold',
    fontSize:20,
  },
  message:{
    fontSize:15,
  },
  profilePic:{
    width: 55,
    height: 55,
  },
  rowContainer: {
    flexDirection: 'row',
    paddingLeft:20,
  },
});

export default CommunityChat;
