// FAQScreen.js
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const FAQScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Image source={require('../assets/magnifyglass.png')} style={styles.searchIcon} />
          <Text style={styles.searchText}>Search Rewards</Text>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contact Us')}>
            <Text style={styles.buttonTextInactive}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.faqQuestion}>
          <Text style={styles.faqQuestionText}>How to make a review on this app?</Text>
          <Text style={styles.faqAnswerText}>
            To make a review on this app, go to the "Review" section in your profile, select the item you want to review, and share your feedback.
          </Text>
        </View>
        <View style={styles.faqQuestion}>
          <Text style={styles.faqQuestionText}>How can I customize my own study plan?</Text>
          <Text style={styles.faqAnswerText}>You can customize your study plan by going to the settings and selecting the "Customize Plan" option.</Text>
        </View>
        <View style={styles.faqQuestion}>
          <Text style={styles.faqQuestionText}>Are all the services in this app free of charges?</Text>
          <Text style={styles.faqAnswerText}>
            Most of the public resources are free of charge. You can enjoy more features in the premium plan.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#F6F4FF',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
    marginRight:10,
    
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchText: {
    flex: 1,
    color: 'gray',
    marginLeft: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  button: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#917FC5',
    padding: 10,
    borderBottomWidth: 5, 
    borderBottomColor: '#917FC5',
  },
  buttonTextInactive: {
    color: 'black',
    padding: 10,
  },
  content: {
    padding: 20,
  },
  faqQuestion: {
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
    paddingVertical: 10,
  },
  faqQuestionText: {
    fontWeight: 'bold',
  },
  faqAnswerText: {
    paddingVertical: 10,
  },
});

export default FAQScreen;
