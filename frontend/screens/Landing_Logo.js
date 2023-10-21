import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function LogoPage() {
  const navigator = useNavigation();
  const [showNextPage, setShowNextPage] = useState(false);
  const opacity = new Animated.Value(0); // Initial opacity (not visible)

  useEffect(() => {
    // Start the timer to navigate to the next page after 3 seconds
    const timer = setTimeout(() => {
      setShowNextPage(true);
    }, 1500);

    // Set up the fade-in animation
    Animated.timing(opacity, {
      toValue: 1, // Fade in (100% opacity)
      duration: 2000, // Transition duration (2 seconds)
      useNativeDriver: true, // Optimize for native performance
    }).start();

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Navigate to the next page when showNextPage becomes true
    if (showNextPage) {
      navigator.navigate('LandingPage1'); // Replace 'NextPage' with the name of your next page
    }
  }, [showNextPage, navigator]);

  return (
    <View style={styles.imageContainer}>
      <Image source={require('../assets/logo.png') } style={{right: 15}} />
      <Animated.View
        style={{
          opacity,
        }}
      >
        <Text style={styles.text}>Hax, Your best study partner</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
        
    
    
  },
  text: {
      fontSize: 15,
      fontStyle: "italic",
      fontFamily: "Sans-serif"
       
  },
});

export default LogoPage;
