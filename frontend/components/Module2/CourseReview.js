import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Card } from '@rneui/base';
import Icon from 'react-native-vector-icons/FontAwesome';

function CourseReview() {
  const reviewData = [
    { id: '1', user: 'User 1', review: 'This course is excellent!', rating: 5 },
    { id: '2', user: 'User 2', review: 'Good content.', rating: 4 },
    { id: '3', user: 'User 3', review: 'Could be better.', rating: 3 },
  ];

  function renderStars(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon
          key={i}
          name={i <= rating ? 'star' : 'star-o'}
          size={20}
          color="#FFD700"
        />
      );
    }
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
        {stars}
      </View>
    );
  }

  return (
    
    <View style={{ marginLeft: 20 }}>
      <FlatList
        data={reviewData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
            <Icon name="user" size={24} color="#000" style={{ marginRight: 10 }} />
            <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              {renderStars(item.rating)}
              <Text style={{ marginLeft: 10 }}>
                {item.user}: {item.review}
              </Text>
            </View>
          </View>
        )}
      />

      </View>
     
    
  );
}

const styles = StyleSheet.create({
  innerCardContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    width: '100%',
    margin: 10, // Increase the margin to move the card to the right
    height: '100%',
  },
});

export default CourseReview;
