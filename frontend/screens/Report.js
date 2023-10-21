import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const ReportIssue = () => {
  const [issue, setIssue] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    alert('Submitted');
    setIssue('');
    setDescription('');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>What's wrong?</Text>
      <View style={styles.frame}>
        <TextInput
          style={styles.input}
          value={issue}
          onChangeText={setIssue}
          placeholder="Write down the issue that you faced"
          placeholderTextColor="gray"
          multiline
        />
      </View>

      <Text style={styles.title}>Tell Us More</Text>
      <View style={styles.frame}>
        <TextInput
          style={styles.input}
          value={issue}
          onChangeText={setIssue}
          placeholder="Write down the descripton of the issue"
          placeholderTextColor="gray"
          multiline
        />
      </View>


      <Text style={styles.title}>Upload Photo</Text>
      <View style={styles.frame}>
        <Image source={require('../assets/image.png')} style={styles.plusIcon} />
        <Text style={{color: "gray", alignSelf: "center"}}>Upload Photo Here</Text>
      </View>



      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  frame: {
    backgroundColor: '#F6F4FF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 40,
    height: 100,
    
    
  },
  input: {
    backgroundColor: 'transparent',
    color: 'black',
    marginBottom: 5
  },
  bigFrame: {
    marginTop: 20,
  },
  bigInput: {
    height: 100,
    textAlignVertical: 'top', // Make text input expand from the top
  },
  uploadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    
  },
  plusIcon: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#C3AED6',
    borderRadius: 50,
    alignItems: 'center',
    padding: 15,
    marginTop: 20,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ReportIssue;
