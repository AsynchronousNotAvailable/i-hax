import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity, Image, Text } from 'react-native';

import excellentIcon from '../assets/excellent_.png';
import happyIcon from '../assets/happy_.png';
import fineIcon from '../assets/fine_.png';
import badIcon from '../assets/bad_.png';
import terribleIcon from '../assets/terrible_.png';

const HealthStress1 = ({ navigation }) => {
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
        <View style={{ backgroundColor: 'white', paddingBottom: 300 }}>
            <View style={{ marginLeft: 30, marginRight: 30, alignItems: 'center' }}>
                <Text style={{ fontSize: 23, textAlign: 'center', marginTop: 10 }}>How would you </Text>
                <Text style={{ fontSize: 23, textAlign: 'center', marginBottom: 40 }}>describe your mood?</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ flexDirection: 'row', paddingTop: 15, paddingBottom: 15, paddingLeft: 15, marginRight: 15 }}
                    style={{ marginLeft: 56, marginRight: 60, paddingBottom:170}}
                >
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
                                        width: 170,
                                        height: 170,
                                        borderColor: selectedIcon === icon.name ? '#6562F5' : 'transparent',
                                        borderWidth: selectedIcon === icon.name ? 5 : 0,
                                        borderRadius: 80,
                                    }}
                                />
                                <Text style={{ marginTop: 30, fontSize: 23 }}>{icon.name}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <Image source={require('../assets/tag1.png')} style={{position: 'absolute',bottom:178, left: 40}}/>
            <TouchableOpacity onPress={() => navigation.navigate('HealthStress2')}>
                <Image source={require('../assets/next.png')}  style={{position: 'absolute', bottom:-55, right: 40}}/>
            </TouchableOpacity>
        </View>
    );
};

export default HealthStress1;
