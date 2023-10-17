import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const CommunityTutorSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  const handleSearch = () => {
    navigation.navigate('CommunityTutor', { searchText: searchQuery });
  };

  const clearSearch = () => {
    setSearchQuery(''); 
  };

  return (
    <ScrollView horizontal>
      <View style={{ margin: 10,marginLeft: 30  }}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="grey" style={{ marginLeft: 20 }} />
          <TextInput
            style={styles.input}
            placeholder="Search"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            onSubmitEditing={handleSearch}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 330,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  input: {
    fontSize: 17,
    flex: 1,
    height: 40,
    marginLeft: 15,
    marginRight: 10,
  },
});

export default CommunityTutorSearch;
