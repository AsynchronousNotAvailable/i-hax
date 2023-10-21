import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Video } from "expo-av";
import { Animated, Easing } from "react-native";

const CourseVideoPage = () => {
  const [transcriptVisible, setTranscriptVisible] = useState(false);
  const translateY = new Animated.Value(0);
  
  const toggleTranscript = () => {
    if (transcriptVisible) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: 200, // Adjust the value based on your transcript height
        duration: 500,
        easing: Easing.in(Easing.cubic),
        useNativeDriver: false,
      }).start();
    }
    setTranscriptVisible(!transcriptVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Video
          source={require("/Users/wenghong/i-hax/frontend/assets/video.mp4")}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          shouldPlay
          useNativeControls
          style={{ flex: 1, }}
          overlay={<View style={{ flex: 1, backgroundColor: "transparent" }} />}
        />
      </View>
      <Animated.View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
                  right: 0,
          height: 200,
           // Adjust the height as needed
          backgroundColor: "white",
          transform: [{ translateY }],
        }}
      >
        <TouchableOpacity onPress={toggleTranscript}>
          <Text>
            {transcriptVisible ? "Hide Transcript" : "Show Transcript"}
          </Text>
        </TouchableOpacity>
        {transcriptVisible && (
          <ScrollView vertical style={styles.imageContainer}>
            <View style={{ flexDirection: "column" }}>
              <Image
                source={require("../assets/subtitle1.png")}
                style={{ width: 300, height: 500, marginLeft: 20 }}
              ></Image>
              <Image
                source={require("../assets/subtitle2.png")}
                style={{ width: 300, height: 300,  marginLeft: 20 }}
              ></Image>
              <Image
                source={require("../assets/subtitle3.png")}
                style={{ width: 300, height: 400,  marginLeft: 20 }}
              ></Image>
              <Image
                source={require("../assets/subtitle4.png")}
                style={{ width: 300, height: 500,  marginLeft: 20 }}
              ></Image>
            </View>
          </ScrollView>
        )}
      </Animated.View>
    </View>
  );
};

export default CourseVideoPage;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    flexDirection: "column",
  },
});
