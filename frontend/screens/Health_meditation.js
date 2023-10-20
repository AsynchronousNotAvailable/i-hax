import React from 'react';
import { ScrollView, View, TouchableOpacity, Text, Image } from 'react-native';

const HealthMeditation = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ margin: 10, alignItems: 'center' }}>
                <Image source={require('../assets/meditation1.png')} />
            </View>
            <TouchableOpacity style={{ flexDirection: 'row', padding: 10,  borderRadius: 15, marginLeft:20, alignItems:'center'}}>
                <Image source={require('../assets/meditation2.png')} style={{ width: 65, height: 65, marginRight: 10, }} />
                <View style={{flexDirection: 'column', justifyContent: 'flex-start',marginLeft:10}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Breathing exercise</Text>
                    <Text style={{ fontSize: 14 }}>10 Min</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', padding: 10,  borderRadius: 15, marginLeft:20, alignItems:'center'}}>
                <Image source={require('../assets/meditation3.png')} style={{ width: 65, height: 65, marginRight: 10, }} />
                <View style={{flexDirection: 'column', justifyContent: 'flex-start',marginLeft:10}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Manage negative emotions</Text>
                    <Text style={{ fontSize: 14 }}>8 Min</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', padding: 10,  borderRadius: 15, marginLeft:20, alignItems:'center'}}>
                <Image source={require('../assets/meditation4.png')} style={{ width: 65, height: 65, marginRight: 10, }} />
                <View style={{flexDirection: 'column', justifyContent: 'flex-start',marginLeft:10}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Mindful living</Text>
                    <Text style={{ fontSize: 14 }}>15 Min</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', padding: 10,  borderRadius: 15, marginLeft:20, alignItems:'center'}}>
                <Image source={require('../assets/meditation5.png')} style={{ width: 65, height: 65, marginRight: 10, }} />
                <View style={{flexDirection: 'column', justifyContent: 'flex-start',marginLeft:10}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Open Awareness</Text>
                    <Text style={{ fontSize: 14 }}>10 Min</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', padding: 10,  borderRadius: 15, marginLeft:20, alignItems:'center'}}>
                <Image source={require('../assets/meditation6.png')} style={{ width: 65, height: 65, marginRight: 10, }} />
                <View style={{flexDirection: 'column', justifyContent: 'flex-start',marginLeft:10}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Body without stress</Text>
                    <Text style={{ fontSize: 14 }}>15 Min</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default HealthMeditation;
