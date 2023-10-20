import React from 'react';
import { View, Button, Image, Text } from 'react-native';

const HealthStressResult = ({ navigation }) => {

    const handleBack = () => {
        navigation.navigate('Health',{screen: 'ThirdTabMain',});
    };

    return (
        <View style={{ backgroundColor: 'white', paddingBottom: 300 }}>
            <View style={{ marginLeft: 30, marginRight: 30, alignItems: 'center' }}>
                <Image source={require('../assets/scale.png')} />
                <Text style={{ fontSize: 15, textAlign: 'center', marginTop: 7 }}>Measured on a scale of 0 to 40, with 40 representing the highest level of stress</Text>
                <Text style={{ fontSize: 18, textAlign: 'center',fontWeight:'bold',marginTop: 25 }}>Recommendations</Text>
                <Text style={{marginTop: 10, marginBottom:20,padding:10,backgroundColor:'#F4F5F9',borderRadius:10}} > 
                    {"1. Reach out to counselors or therapists for guidance on managing your stress\n\n" +
                    "2. Try our guided relaxation sessions for instant relaxation.\n\n" +
                    "3. Join our supportive community of users for effective stress-management tips.\n\n" +
                    "4. Let us remind you to take breaks and engage in activities that bring you joy and relaxation."}
                </Text>
            </View>
            <View style={{ width: '70%', alignSelf: 'center',borderRadius: 10, overflow: 'hidden'}}>
                    <Button
                    title="Back"
                    color="#7E97F1" 
                    onPress={handleBack}
                    />
                </View>
        </View>
    );
};

export default HealthStressResult;
