import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';
import placeholderImage from '../assets/avatar.png';
import { useNavigation } from '@react-navigation/native';

const tutorsData = {
    tutor1: require('../assets/UserAvatar1.png'),
    tutor2: require('../assets/UserAvatar2.png'),
    tutor3: require('../assets/UserAvatar3.png'),
  };

  const timeSlots = [
    '23 October 2023, Monday 7:00PM - 8:00PM',
    '23 October 2023, Monday 9:00PM - 10:00PM',
    '24 October 2023, Tuesday 8:00PM - 9:00PM',
    '24 October 2023, Thursday 1:00PM - 3:00PM',
  ];

const CommunityBookTutor = ({ route }) => {
  const { tutor } = route.params;
  const [requirements, setRequirements] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const handleTimeSlotSelection = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };
  const navigation = useNavigation();
  const handleSubmit = () => {
    navigation.navigate('Community', { screen: 'FourthTabMain' });
  };

  return (
    <View style={styles.container}>
      <View style={styles.tutorContainer}>
      <Image source={tutorsData[tutor.avatar] || placeholderImage} style={styles.avatar} />
      <Text style={styles.tutorName}>{tutor.name}</Text>
      </View>  
      <Text style={{fontSize: 16, paddingLeft:5}}>Skills: {tutor.course}  </Text>
      <Text style={{fontSize: 16, paddingLeft:5}}>Experience: {tutor.experience}</Text>
      <Text style={{fontSize: 16, paddingTop:15, paddingLeft:5}}>Your requirements:</Text>
      <TextInput
        style={styles.textInput}
        multiline
        numberOfLines={4}
        value={requirements}
        onChangeText={(text) => setRequirements(text)}
        textAlignVertical="top"
        padding={10}
      />
      <Text style={styles.timeSlotLabel}>Book a time slot:</Text>
      <View style={styles.timeSlotButtons}>
        {timeSlots.map((timeSlot, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.timeSlotButton,
              selectedTimeSlot === timeSlot ? styles.selectedTimeSlot : null,
            ]}
            onPress={() => handleTimeSlotSelection(timeSlot)}
          >
            <Text>{timeSlot}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{paddingTop:20}}>
      <Button title="Submit" onPress={handleSubmit} color='#8B89F7' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft:30,
    paddingRight:25,
    paddingTop:15,
    backgroundColor: 'white',
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  tutorName: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft:15
  },
  tutorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom:15,
  },
  textInput:{
    backgroundColor:'#F2F2F2',
    height:130,
    marginTop:10,
    marginBottom:15
  },
  timeSlotButton:{
    backgroundColor:'#F2F2F2',
    borderRadius:15,
    alignItems: 'center',
    padding:10,
    marginBottom:6,
    borderColor: 'transparent',
    borderWidth:2,
  },
  selectedTimeSlot:{
    borderColor:'#8B89F7',
    borderWidth:2,
  },
  timeSlotLabel:{
    paddingBottom:10,
    fontSize:16,
    paddingLeft:5
  },
});

export default CommunityBookTutor;