import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ReportIssue = () => {
  const [issue, setIssue] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    alert('Submitted');
    setIssue('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
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
      <Text style={styles.title}> </Text>
      <Text style={styles.title}>Tell Us More.</Text>
      <View style={styles.bigFrame}>
        <TextInput
          style={[styles.input, styles.bigInput]}
          value={description}
          onChangeText={setDescription}
          placeholder="Write your description here"
          placeholderTextColor="gray"
          multiline
        />
      </View>
      <View style={styles.uploadContainer}>
        <Text style={styles.title}>Upload Photo</Text>
        <Image source={require('../assets/plus_icon.jpg')} style={styles.plusIcon} />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Issue</Text>
      </TouchableOpacity>
    </View>
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
  },
  frame: {
    backgroundColor: '#F6F4FF',
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
  },
  input: {
    backgroundColor: 'transparent',
    color: 'black',
  },
  bigFrame: {
    backgroundColor: '#F6F4FF',
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
  },
  bigInput: {
    height: 150,
    bottom: 60,
  },
  uploadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  plusIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  submitButton: {
    backgroundColor: '#C3AED6',
    borderRadius: 50,
    alignItems: 'center',
    padding: 15,
    marginTop: 20,
    marginLeft: 80,
    marginRight: 80,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ReportIssue;
