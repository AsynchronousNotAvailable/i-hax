import React from 'react';
import { View, Text, FlatList } from 'react-native';
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
    return stars;
  }

  return (
    <FlatList
    data={reviewData}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Icon name="user" size={24} color="#000" style={{ marginRight: 10 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {renderStars(item.rating)}
            <Text style={{ marginLeft: 10 }}>
              {item.user}: {item.review}
            </Text>
          </View>
        </View>
    )}
  />
  );

}

export default CourseReview;
