import React, { useState } from 'react';
import {ScrollView, View, TouchableOpacity, Image, Button, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

const HealthStress5 = ({ navigation }) => {

    const [selectedAnswers, setSelectedAnswers] = useState({});

    const questions = [
        "1. Been upset because of something that happened unexpectedly?",
        "2. Felt that you were unable to control important things in your life?",
        "3. Felt nervous and 'stressed'?",
        "4. Felt confident about your ability to handle your personal problems?",
        "5. Felt that things were going your way?",
        "6. Found that you could NOT cope with all the things you had to do?",
        "7. Been able to control irritations in your life?",
        "8. Felt that you were on top of things?",
        "9. Been angered because of things that happened that were out of your control?",
        "10. Felt difficulties were piling up so high that you could not overcome them?"
    ];

    const options = [
        "Never",
        "Almost Never",
        "Sometimes",
        "Fairly Often",
        "Very Often"
    ];
    const handleAnswerSelect = (question, answer) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [question]: answer
        });
    };

    const handleSubmission = () => {
        navigation.navigate('HealthStressResult');
    };

    return (
        <View style={{ backgroundColor: 'white', paddingBottom: 300 }}>
            <View style={{ marginLeft: 30, marginRight: 30, alignItems: 'center' }}>
                <Text style={{ fontSize: 22, textAlign: 'center', marginTop: 5,marginBottom: 10 }}>Answer the questions</Text>
                <Text style={{ fontSize: 17, textAlign: 'center', marginBottom: 20 }}>In the last month, how often have you:</Text>
                <ScrollView showsVerticalScrollIndicator={false} style={{padding:20, marginBottom:20,backgroundColor:'#F4F5F9', borderRadius:20}}>
                {questions.map((question, index) => (
                        <View key={index}>
                            <Text style={{ fontSize: 17, marginBottom: 10 }}>{question}</Text>
                            <View style={{  marginBottom: 20 }}>
                            {options.map((option, optionIndex) => (
                                <TouchableOpacity
                                    key={optionIndex}
                                    onPress={() => handleAnswerSelect(question, option)}
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}
                                >
                                    <RadioButton
                                        value={option}
                                        status={selectedAnswers[question] === option ? 'checked' : 'unchecked'}
                                        onPress={() => handleAnswerSelect(question, option)}
                                    />
                                    <Text style={{ marginLeft: 10 }}>{option}</Text>
                                </TouchableOpacity>
                            ))}
                            </View>
                        </View>
                    ))}
                </ScrollView>
                <View style={{ width: '70%', alignSelf: 'center',borderRadius: 10, overflow: 'hidden'}}>
                    <Button
                    title="Submit"
                    color="#7E97F1" 
                    onPress={handleSubmission}
                    />
                </View>
            </View>
           
        </View>
    );
};

export default HealthStress5;
