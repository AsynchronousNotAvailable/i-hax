import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import excellentIcon from '../assets/Excellent.png';
import happyIcon from '../assets/Happy.png';
import fineIcon from '../assets/Fine.png';
import badIcon from '../assets/Bad.png';
import terribleIcon from '../assets/Terrible.png';

const HealthJournalPost = ({ navigation, route }) => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [selected, setSelected] = useState('');
  const icons = [
    { name: 'Excellent', source: excellentIcon },
    { name: 'Happy', source: happyIcon },
    { name: 'Fine', source: fineIcon },
    { name: 'Bad', source: badIcon },
    { name: 'Terrible', source: terribleIcon },
  ];

  const handleIconSelect = (iconName) => {
    setSelectedIcon(iconName);
  };

  const [postText, setPostText] = useState('');

  const handleSubmission = () => {
    const { setPosts } = route.params;

    const newPost = {
      id: Date.now().toString(),
      date:formattedDate,
      icon: selectedIcon, 
      status: selectedIcon,
      content:postText,
    };

    setPosts((prevPosts) => [...prevPosts, newPost]);
    navigation.goBack();
  };

  const currentDate = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  return (
    <View style={{ margin: 10, }}>
      <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 10,marginLeft:50, alignItems: 'center', justifyContent:'center',borderRadius: 15, width:250 }}>
          <Icon name="calendar" size={20} color="#000" />
          <Text style={{ textAlign: 'center', fontSize: 14, marginLeft: 10 }}>
            Today, {formattedDate}
          </Text>
      </View>
      <Text style={{ fontWeight: 'bold', fontSize: 18, paddingLeft: 15 }}>How was your day?</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        {icons.map((icon) => (
          <TouchableOpacity
            key={icon.name}
            onPress={() => handleIconSelect(icon.name)}
            style={{ margin: 8 }}
          >
            <View style={{ alignItems: 'center' }}>
              <Image
                source={icon.source}
                style={{
                  width: 55,
                  height: 55,
                  borderColor: selectedIcon === icon.name ? '#6562F5' : 'transparent',
                  borderWidth: selectedIcon === icon.name ? 2 : 0,
                  borderRadius: 10,
                }}
              />
              <Text style={{ marginTop: 5 }}>{icon.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ margin: 10 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, paddingLeft: 5, paddingBottom:10 }}>Today's note</Text>
        <View style={{ backgroundColor: 'white', borderRadius:10 }}>
          <TextInput
            multiline
            numberOfLines={22}
            placeholder=" Write here"
            onChangeText={(text) => setPostText(text)}
            textAlignVertical="top"
            height={350}
            marginTop={10}
            marginBottom={15}
            padding={5}
            paddingLeft={10}
          />
        </View>
        <View style={{ width: '70%', alignSelf: 'center', borderRadius: 10, overflow: 'hidden',}}>
          <Button
            title="Save"
            color="#7E97F1"
            onPress={handleSubmission}
          />
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
  },
  postButton: {
    fontSize: 16,
    color: '#6562F5',
    paddingRight: 10,
  },
});

export default HealthJournalPost;
