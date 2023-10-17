import React from 'react';
import { ScrollView, View, TouchableOpacity, Text, Image, StyleSheet,ImageBackground,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import placeholderImage from '../assets/avatar.png';

const ForumPost = ({ post }) => {
  const maxContentLength = 160;
  return (
    <View style={styles.postContainer}>
      <View style={styles.postContent}>
        <View style={styles.userContainer}>
          <View style={styles.userAvatarContainer}>
           <Image source={usersAvatar[post.userAvatar]|| placeholderImage} style={styles.avatar}/>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.username}>{post.username}</Text>
          </View>
          <TouchableOpacity style={styles.dotsIcon}>
            <Icon name="ellipsis-h" size={20} color="gray" style={{transform: [{ rotate: '90deg' }], marginTop: 5,marginLeft: 20 }}/>
          </TouchableOpacity>
        </View>
        <Text style={styles.postTitle}>{post.title}</Text>
        <Text style={styles.postText}>
          {post.content.length > maxContentLength
            ? post.content.slice(0, maxContentLength) + ' ... '
            : post.content
          }
          {post.content.length > maxContentLength && (
            <Text style={{ color: 'gray' }}>see more</Text>
          )}
        </Text>
       
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} >
            <Icon name="thumbs-up" size={20} color="#6562F5" regular/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="comment" size={20} color="#6562F5"regular />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="bookmark" size={20} color="#6562F5" style={{ marginRight: -10 }} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="share-alt" size={20} color="#6562F5" regular style={{ marginRight: 15}}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const UpcomingSessions = ({ data }) => {
  return (
    <View style={styles.upcomingSessionsContainer}>
      <Text style={styles.upcomingSessionsText}>Upcoming Sessions</Text>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.upcomingSessionCard}>
            <Text style={styles.subject}>{item.subject}</Text>
            <View style={styles.dateContainer}>
              <Icon name="calendar" size={20} color="black" />
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <View style={styles.tutorContainer}>
            <Image source={placeholderImage} style={styles.avatar} />
            <Text style={styles.tutorname}>{item.username}</Text>
            <View style={styles.startSessionContainer}>
            <TouchableOpacity style={styles.startSessionButton} >
              <Text style={styles.startSessionText}>Start Session</Text>
            </TouchableOpacity>
            </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const usersAvatar = {
  user1: require('../assets/User1.png'),
  user2: require('../assets/User2.png'),
};

const Community = ({ navigation }) => {
  const posts = [
    {
      id: 1,
      username: 'Catherine',
      userAvatar: 'user1',
      title: 'Learn Coding for FREE!',
      content: 'Here’s a list of websites to help you get started with coding:\n\n1. GeeksforGeeks.org\n2. SoloLearn.com\n3. W3Schools.com\n4. FreeCodeCamp.org\n5. Codecademy.com  ',
    },
    {
      id: 2,
      username: 'Sam',
      userAvatar: 'user2',
      title: 'Resume tips for you to score a job:',
      content: '1. Lead with a strong education section if you are writing a resume without work experience \n2. Quantify you results using numbers, percentages, and metrics whenever possible.\n3. Always update your resume regularly without waiting for the end of the year or the start of a job searc',
    },
    {
      id: 3,
      username: 'Anonymous User',
      userAvatar: null,
      title: 'I am stressed :(',
      content: 'I just cannot sit and study. I get extremely anxious when I try to study, and now I have started hating my studies. My grades keep dropping. What should I do?',
    },
    {
      id: 4,
      username: 'Anonymous User',
      userAvatar: null,
      title: 'Physics question',
      content: 'An airplane flies 200 km due west from city A to city B and then 280 km in the direction of 27.0° north of west from city B to city C.\n(a) In straight-line distance, how far is city C from city A? km ',
    }
  ];

  const upcomingSessions = [
    {
      id: 1,
      subject:'Physics',
      date:'Tue 10 Oct 11:00 AM to 12:00 PM',
      username: 'Mary',
      avatar: 'null', 
    },
    {
      id: 2,
      subject:'Chinese',
      date:'Sun 15 Mon 9:00 PM to 11:00 PM',
      username: 'James',
      avatar: 'null', 
    },
  ];

  return (
    <View>
    <ScrollView>
      <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexDirection: 'row', paddingTop: 15, paddingBottom:15, paddingLeft:10, paddingRight:10 }}
        >
          <View style={{ marginHorizontal: 5}}>
            <Image source={require('../assets/space0.png')} style={{ width: 60, height: 60, marginTop: -3 }} />
          </View>
          <View style={{ marginHorizontal: 5}}>
            <TouchableOpacity>
              <Image source={require('../assets/space1.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 5}}>
            <TouchableOpacity>
              <Image source={require('../assets/space2.png')}  />
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 5}}>
            <TouchableOpacity>
              <Image source={require('../assets/space3.png')}  />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <UpcomingSessions data={upcomingSessions} />
        <TouchableOpacity onPress={() => navigation.navigate('CommunityTutorSearch')}>
        <ImageBackground source={require('../assets/booktutor.png')} style={styles.imageBackground}>
          <View style={styles.overlay}>
            <Text style={styles.text}>Ask or book a session with a tutor</Text>
            <Text style={styles.linkText}>Search tutor &gt;&gt; </Text>
          </View>
        </ImageBackground>
        </TouchableOpacity>
        {posts.map((post) => (
          <ForumPost key={post.id} post={post} />
        ))}
         </ScrollView>
         <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => {
            navigation.navigate('CommunityPost');
          }}
        >
          <Icon name="plus" size={18} color="white" />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 20,
    borderBottomWidth: 7,
    borderBottomColor: '#F2F2F2',
    backgroundColor: 'white',
  },

  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userAvatarContainer: {
    marginRight: 3,
  },
  userInfo: {
    flex: 1,
  },
  dotsIcon: {
    marginRight:10 ,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },
  username: {
    fontSize: 14,
    paddingTop: 5,
    paddingLeft: 10,
  },
  postContent: {
    flex: 1,
    paddingLeft: 5,
  },
  postTitle: {
    paddingTop: 8,
    paddingLeft: 3,
    fontSize: 16,
    fontWeight: 'bold',
  },
  postText: {
    paddingTop: 8,
    paddingLeft: 3,
    paddingRight: 10,
    fontSize: 14,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 13,
  },
  button: { 
    padding: 5,
    borderRadius: 5,
  },
  likeCount: {
    marginLeft: 5,
  },
  imageBackground: {
    width: '100%',
    height: 60, 
    marginBottom:7,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 16,
    paddingBottom:3,
  },
  linkText: {
    color: '#6562F5',
    fontSize: 16,
  },
  upcomingSessionsContainer: {
    backgroundColor: 'white',
    padding: 7,
    marginBottom: 10,
  },
  upcomingSessionsText: {
    fontSize:17,
    paddingLeft:15,
  },
  subject: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom:7,
  },
  upcomingSessionsScrollView: {
    flexDirection: 'row',
  },
  upcomingSessionCard: {
    width: 270, 
    backgroundColor: '#F2EFFF', 
    margin: 10,
    borderRadius: 10,
    padding: 15,
  },
  tutorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  tutorname:{
    marginRight:30,
    marginTop: 4,
  },
  startSessionContainer: {
    marginLeft: 10, 
  },
  startSessionButton:{
    backgroundColor: 'white',
    borderRadius: 7, 
    width:110,
    height:30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startSessionText:{
    color:'#6562F5',
  },
  dateContainer:{
    flexDirection: 'row',
    paddingLeft:3,
    paddingBottom:4,
  },
  date:{
    paddingLeft:10,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#6562F5',
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Community;