import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity, Text, Image, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const icons = {
  Excellent: require('../assets/Excellent.png'),
  Happy: require('../assets/Happy.png'),
  Fine: require('../assets/Fine.png'),
  Bad: require('../assets/Bad.png'),
  Terrible: require('../assets/Terrible.png'),
};

const ForumPost = ({ post }) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postContent}>
        <View style={styles.userContainer}>
          <View style={styles.userAvatarContainer}>
            <Image source={icons[post.icon]} style={styles.icon} />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.postText}>{post.date}</Text>
            <Text style={{ textAlign: 'center', fontSize: 14, width: 100, height: 20, marginRight: 5, marginVertical: 5, borderRadius: 10, backgroundColor: getBgColor(post) }}>
              {post.status}</Text>
          </View>
          <TouchableOpacity style={styles.dotsIcon}>
            <Icon name="ellipsis-h" size={20} color="gray" style={{ marginTop: 5, marginLeft: 20 }} />
          </TouchableOpacity>
        </View>
        <Text style={{ paddingTop: 8, paddingLeft: 60, color: "gray", fontSize: 13, }}>{post.content}</Text>
      </View>
    </View>
  );
};

const getBgColor = (post) => {
  switch (post.status) {
    case 'Excellent':
      return '#DAF8DA';
    case 'Happy':
      return '#FFF6E0';
    case 'Fine':
      return '#FFE5D7';
    case 'Bad':
      return '#FFCCC0';
    case 'Terrible':
      return '#D9E6FF';
    default:
      return 'white';
  }
}


const HealthJournal = ({ navigation }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      date: 'Sun, 15/10/2023',
      icon: 'Happy',
      status: 'Happy',
      content: 'Today is a good day. My friend and I ...',
    },
    {
      id: 4,
      date: 'Wed, 11/10/2023',
      icon: 'Excellent',
      status: 'Excellent',
      content: 'Morning run... Feeling good and energetic.. ',
    },
    {
      id: 2,
      date: 'Sat, 14/10/2023',
      icon: 'Fine',
      status: 'Fine',
      content: 'So busy, I have many assignment to do ...',
    },
    {
      id: 6,
      date: 'Wed, 11/10/2023',
      icon: 'Terrible',
      status: 'Terrible',
      content: 'I am so unluck today... ',
    },
    {
      id: 3,
      date: 'Fri, 13/10/2023',
      icon: 'Bad',
      status: 'Bad',
      content: 'I didn’t score well in the test today...',
    },
    {
      id: 5,
      date: 'Thu, 12/10/2023',
      icon: 'Fine',
      status: 'Fine',
      content: 'Boring... I miss the time playing....',
    },
  ]);

  const [count, setCount] = useState(120); 
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <View >
      <ScrollView>
        <View style={{ flexDirection: 'row', margin: 15, paddingHorizontal: 10, justifyContent: 'space-between', }}>
          <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 10, alignItems: 'center', borderRadius: 15 }}>
            <View style={styles.userAvatarContainer}>
              <Image source={require('../assets/entries.png')} style={styles.icon} />
            </View>
            <View style={{ paddingHorizontal: 7 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{count}/365</Text>
              <Text style={{ textAlign: 'center', fontSize: 14 }}>entries</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 10, alignItems: 'center', borderRadius: 15 }}>
            <View style={styles.userAvatarContainer}>
              <Image source={require('../assets/emotion.png')} style={styles.icon} />
            </View>
            <View style={{ paddingHorizontal: 7 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Neutral</Text>
              <Text style={{ textAlign: 'center', fontSize: 14 }}>emotion</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 27 }}>All Journals</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, marginRight: 10 }}>Newest</Text>
            <Icon name="filter" size={13} color="black" style={{ marginRight: 25 }} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop:20 }}>
          <TouchableOpacity>
            <Icon name="chevron-left" size={20} color="black" style={{ marginRight: 5 }}/>
          </TouchableOpacity>
          <Text style={{ fontWeight: 'bold', fontSize: 16, marginHorizontal: 5}}>October 2023</Text>
          <TouchableOpacity>
            <Icon name="chevron-right" size={20} color="black" style={{ marginLeft: 5 }}/>
          </TouchableOpacity>
        </View>
        <View style={{ margin: 20 }}>
          {posts.map((post) => (
            <ForumPost key={post.id} post={post} />
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => {
          navigation.navigate('HealthJournalPost', {
            setPosts: (newPosts) => {
              setPosts(newPosts);
              incrementCount();
            },
          });
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
    paddingHorizontal: 10,
    borderBottomWidth: 7,
    borderBottomColor: '#F2F2F2',
    backgroundColor: 'white',
    borderRadius: 15,
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
    marginTop: -5,
    marginRight: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  postContent: {
    flex: 1,
    paddingLeft: 5,
  },
  postText: {
    paddingLeft: 3,
    paddingRight: 10,
    fontSize: 15,
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

export default HealthJournal;