import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

import sleep1 from '../assets/sleep1.png';
import sleep2 from '../assets/sleep2.png';
import sleep3 from '../assets/sleep3.png';
import sleep4 from '../assets/sleep4.png';
import sleep5 from '../assets/sleep5.png';

const HealthStress2 = ({ navigation }) => {
    const [selectedIcon, setSelectedIcon] = useState(null);
    const icons = [
        { name: 'Excellent', source: sleep1 },
        { name: 'Happy', source: sleep2 },
        { name: 'Fine', source: sleep3 },
        { name: 'Bad', source: sleep4 },
        { name: 'Terrible', source: sleep5 },
    ];

    const handleIconSelect = (iconName) => {
        setSelectedIcon(iconName);
    };

    return (
        <View style={{ backgroundColor: 'white', paddingBottom: 300 }}>
            <View style={{ marginLeft: 30, marginRight: 30, alignItems: 'center' }}>
                <Text style={{ fontSize: 23, textAlign: 'center', marginTop: 10 }}>How would you rate </Text>
                <Text style={{ fontSize: 23, textAlign: 'center', marginBottom: 15 }}>your sleep quality?</Text>
                <View>
                    {icons.map((icon) => (
                        <TouchableOpacity
                            key={icon.name}
                            onPress={() => handleIconSelect(icon.name)}
                            style={{ margin: 6 }}
                        >
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    source={icon.source}
                                    style={{
                                        width: 320,
                                        height: 80,
                                        borderColor: selectedIcon === icon.name ? '#6562F5' : 'transparent',
                                        borderWidth: selectedIcon === icon.name ? 3 : 0,
                                        borderRadius: 10,
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <Image source={require('../assets/tag2.png')} style={{ position: 'absolute', bottom: 240, left: 40 }} />
            <TouchableOpacity onPress={() => navigation.navigate('HealthStress3')}>
                <Image source={require('../assets/next.png')} style={{ position: 'absolute', bottom: -70, right: 40 }} />
            </TouchableOpacity>
        </View>
    );
};

export default HealthStress2;
