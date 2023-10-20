import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity, Text, Image } from 'react-native';

import excellentIcon from '../assets/Excellent.png';
import happyIcon from '../assets/Happy.png';
import fineIcon from '../assets/Fine.png';
import badIcon from '../assets/Bad.png';
import terribleIcon from '../assets/Terrible.png';

const Health = ({ navigation }) => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const icons = [
    { name: 'Excellent', source: excellentIcon },
    { name: 'Happy', source: happyIcon },
    { name: 'Fine', source: fineIcon },
    { name: 'Bad', source: badIcon },
    { name: 'Terrible', source: terribleIcon },
  ];

  const handleIconSelect = (iconName) => {
    setSelectedIcon(iconName);
  };


  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View>
        <Text style={{ marginLeft: 27, fontSize: 17 }}>How are you feeling today ?</Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        {icons.map((icon) => (
          <TouchableOpacity
            key={icon.name}
            onPress={() => handleIconSelect(icon.name)}
            style={{ margin: 8 }}
          >
            <View style={{ alignItems: 'center' }}>
              <Image
                source={icon.source}
                style={{
                  width: 55,
                  height: 55,
                  borderColor: selectedIcon === icon.name ? '#6562F5' : 'transparent',
                  borderWidth: selectedIcon === icon.name ? 2 : 0,
                  borderRadius: 10,
                }}
              />
              <Text style={{ marginTop: 5 }}>{icon.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ alignItems: 'center' }}>
        <Image source={require('../assets/moodchart.png')} />
        <TouchableOpacity style={{ marginTop: 10 }} onPress={() => navigation.navigate('HealthStress1')}>
          <Image source={require('../assets/stress.png')} />
        </TouchableOpacity>
        <Image source={require('../assets/onetoone.png')} style={{ marginTop: 10 }} />
        <View style={{ flexDirection: 'row', margin: 10, paddingHorizontal: 10, justifyContent: 'space-between', }}>
          <TouchableOpacity onPress={() => navigation.navigate('HealthJournal')}>
            <Image source={require('../assets/journal.png')} style={{ marginRight: 10, width: 160 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/meditation.png')} style={{ width: 160 }} />
          </TouchableOpacity>
        </View>
        <Image source={require('../assets/quote.png')} />
      </View>

    </ScrollView>
  );
};

export default Health;
