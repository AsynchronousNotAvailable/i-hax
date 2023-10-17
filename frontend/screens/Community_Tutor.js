import React, { useState, useEffect } from 'react';
import { ScrollView, View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useRoute } from '@react-navigation/native';
import placeholderImage from '../assets/avatar.png';

const tutorsAvatar = {
  tutor1: require('../assets/UserAvatar1.png'),
  tutor2: require('../assets/UserAvatar2.png'),
  tutor3: require('../assets/UserAvatar3.png'),
};

const tutorsData = [
  {
    id: 1,
    name: 'Tutor Robert',
    course: 'Programming 101',
    avatar: 'tutor1',
    experience: '4 years',
  },
  {
    id: 2,
    name: 'Tutor James',
    course: 'Advanced Programming',
    avatar: 'tutor2',
    experience: '3 years',
  },
  {
    id: 3,
    name: 'Tutor Evelyn',
    course: 'Python / Java programming',
    avatar: 'tutor3',
    experience: '2+ years',
  },
  {
    id: 4,
    name: 'Tutor Jasmine',
    course: 'Fundamentals of Programming (C++/C)',
    avatar: null,
    experience: '2 years',
  },
];

const CommunityTutor = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredTutors, setFilteredTutors] = useState(tutorsData);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    const { searchText } = route.params;
    setSearchText(searchText);
    handleSearch(searchText);
  }, [route.params]);

  const handleSearch = (text) => {
    const filteredResults = tutorsData.filter((tutor) =>
      tutor.course.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredTutors(filteredResults);
  };

  const handleClearSearch = () => {
    navigation.navigate('CommunityTutorSearch'); 
    setSearchText(''); 
  };

  const handleBookSession = (tutor) => {
    navigation.navigate('CommunityBookTutor', { tutor });
  };

  return (
      <View>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="grey" style={{ marginLeft: 20 }} />
          <Text style={styles.searchText}>{searchText}</Text>
          {searchText.length > 0 && (
          <TouchableOpacity onPress={handleClearSearch} >
            <Icon name="remove" size={20} color="grey" style={{marginRight:15}}/>
          </TouchableOpacity>
          )}
        </View>
        <ScrollView vertical={true} horizontal={false}>
        {filteredTutors.map((tutor) => (
        <View key={tutor.id} style={styles.tutorCard}>
          <View style={styles.rowContainer}>
            <Image source={tutorsAvatar[tutor.avatar] || placeholderImage} style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.tutorName}>{tutor.name}</Text>
              <Text style={styles.courseName}>{tutor.course}</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.btnMsg} onPress={() => navigation.navigate('CommunityMessage', { tutorName: tutor.name })}>
              <Text style={styles.btnMsgText}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnBook} onPress={()  => handleBookSession(tutor)}>
              <Text style={styles.btnBookText}>Book a Session</Text>
            </TouchableOpacity>
          </View>
        </View>
        ))}
         </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  tutorName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  courseName: {
    fontSize: 14,
  },
  tutorCard: {
    flexDirection: 'column',
    padding: 10,
    paddingLeft:30,
    width:390,
    backgroundColor:'white',
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom:10,
  },
  textContainer: {
    flex: 1, 
    marginLeft: 15, 
    marginBottom:5
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginRight:15
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 330,
    borderRadius: 15,
    backgroundColor: 'white',
    marginBottom:10,
    margin: 10, 
    marginLeft: 30,
  },
  searchText: {
    fontSize: 17,
    flex: 1,
    marginLeft: 15,
    marginRight: 0,
  },
  btnMsg:{
    backgroundColor: '#EBEFFF',
    width:160,
    padding: 6,
    borderRadius: 5,
    alignItems:'center',
  },
  btnMsgText:{
    color: '#6562F5',
    fontSize:15,
  },
  btnBook:{
    backgroundColor: '#D5D4FF',
    width:160,
    padding: 6,
    borderRadius: 5,
    alignItems:'center',
  },
  btnBookText:{
    color: 'black',
    fontSize:15,
  }
});

export default CommunityTutor;
