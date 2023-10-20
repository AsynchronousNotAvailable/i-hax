import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { ScrollView, View, TouchableOpacity, Text, Image } from 'react-native';

const LearnPublic = ({ navigation }) => {
  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        //title: 'Home', // Set the title if needed
        headerShown: false, // Hide the header
      });
    }, [])
  );
  return (
    <ScrollView horizontal>
      <View style={{ flexDirection: 'row' }}>
        {/* Container 1 */}
        <View style={{ margin: 10 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('OtherScreen')}
          >
            <Image
              source={require('../assets/graphic.png')}
              style={{ width: 100, height: 100 }}
            />
          </TouchableOpacity>
          <Text>Image 1</Text>
        </View>

        {/* Container 2 */}
        <View style={{ margin: 10 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('OtherScreen')}
          >
            <Image
              source={require('../assets/idea.png')}
              style={{ width: 100, height: 100 }}
            />
          </TouchableOpacity>
          <Text>Image 2</Text>
        </View>

        {/* Container 3 */}
        <View style={{ margin: 10 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('OtherScreen')}
          >
            <Image
              source={require('../assets/wh.jpg')}
              style={{ width: 100, height: 100 }}
            />
          </TouchableOpacity>
          <Text>Image 3</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default LearnPublic;
