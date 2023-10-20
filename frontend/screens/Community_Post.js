import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Switch, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CommunityPost = ({ navigation, route }) => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [postText,setPostText] = useState('');
  const handlePost = () => {
    const { setPosts } = route.params; 

    const newPost = {
      id: Date.now().toString(),
      username: 'You', 
      userAvatar: 'null',
      content: postText, 
    };

    setPosts((prevPosts) => [...prevPosts, newPost]);
    navigation.goBack();
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1, backgroundColor: 'white' }}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePost} >
            <Icon name="remove" size={20} color="grey" style={{marginLeft:10}}/>
        </TouchableOpacity>
        <Text style={styles.title}>Create Post</Text>
        <TouchableOpacity onPress={handlePost}>
          <Text style={styles.postButton}>Post</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5, marginLeft: 23, marginRight: 10, backgroundColor: '#F2F5FF', borderRadius: 10, width: 350 }}>
        <Text style={{ marginRight: 10, fontSize: 15 }}>  Post Anonymously</Text>
        <Switch value={isAnonymous} onValueChange={(newValue) => setIsAnonymous(newValue)} style={{ paddingRight: 140, color: 'purple' }} />
      </View>
      <View style={styles.textContainer}>
        <TextInput
          multiline
          numberOfLines={6}
          placeholder="  Share your thoughts..."
          onChangeText={(text) => setPostText(text)}
          textAlignVertical="top"
          height={130}
          marginTop={10}
          marginBottom={15}
          padding={10}
          marginLeft={18}
        />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => {/* Handle Image Upload */}}>
          <Icon name="image" size={20} color="#0074cc" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {/* Handle GIF Upload */}}>
          <Icon name="film" size={20} color="#0074cc" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {/* Handle Chart Upload */}}>
          <Icon name="bar-chart" size={20} color="#0074cc" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {/* Handle Location Selection */}}>
          <Icon name="map-marker" size={20} color="#0074cc" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop:45,
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
    paddingRight:10,
    },
  textContainer: {
    flex: 1,
    marginBottom: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    margin: 20,
    paddingBottom: -10,
  }
});

export default CommunityPost;
