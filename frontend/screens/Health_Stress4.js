import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HealthStress4 = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
      { text: 'Prescribed Medications', icon: 'medkit'},
      { text: 'Over the Counter Supplements', icon: 'pills'},
      { text: 'I’m not taking any', icon: 'ban'},
    ];
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option.text);
    };

    return (
        <View style={{ backgroundColor: 'white', paddingBottom: 300 }}>
            <View style={{ marginLeft: 30, marginRight: 30, alignItems: 'center' }}>
                <Text style={{ fontSize: 23, textAlign: 'center', marginTop: 10 }}>Are you taking any </Text>
                <Text style={{ fontSize: 23, textAlign: 'center', marginBottom: 30 }}>medications or supplements?</Text>
                <View style={{paddingBottom:150}}>
                    {options.map((option) => (
                    <TouchableOpacity
                        key={option.text}
                        onPress={() => handleOptionSelect(option)}
                        style={{
                            margin: 10,
                            alignItems: 'center',
                            flexDirection: 'row',
                            borderWidth: 2,
                            borderRadius: 10,
                            width: 340,
                            borderColor: selectedOption === option.text ? '#6562F5' : '#A7A8AA',
                            padding: 10,
                        }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical:15 }}>
                                <FontAwesome5  name={option.icon} size={23} color={selectedOption === option.text ? 'blue' : 'black'} style={{ marginRight: 10 }} />
                                <Text style={{ textAlign: 'left', color: selectedOption === option.text ? 'blue' : 'black', fontSize: 18 }}>
                                    {option.text}
                                </Text>
                            </View>
                            <RadioButton
                                value={option.text}
                                status={selectedOption === option.text ? 'checked' : 'unchecked'}
                                onPress={() => handleOptionSelect(option)}
                            />
                        </View>
                    </TouchableOpacity>
                    ))}
                </View>
            </View>
            <Image source={require('../assets/tag4.png')} style={{ position: 'absolute', bottom: 240, left: 40 }} />
            <TouchableOpacity onPress={() => navigation.navigate('HealthStress5')}>
                <Image source={require('../assets/next.png')} style={{ position: 'absolute', bottom: -70, right: 40 }} />
            </TouchableOpacity>
        </View>
    );
};

export default HealthStress4;
