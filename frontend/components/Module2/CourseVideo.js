import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import * as Animatable from 'react-native-animatable';

function CourseVideo({ navigation }) {
  const [downloaded, setDownloaded] = useState(false);
  const animateDownload = () => {
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false); // Reset the animation after a short delay (optional)
    }, 1000); // Adjust the delay as needed
  };

  
  return (
    <ScrollView vertical>
      <View style={styles.playList}>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.playButton} onPress={() => navigation.navigate("Course Video Page")}>
            <Image source={require("../../assets/play.png")} />
          </TouchableOpacity>
          <View style={styles.progressBar}>
          <View style={[styles.progressFill, {width: "100%"}]} />
          </View>
          <Text style={styles.progressText}>100%</Text>
          <TouchableOpacity style={styles.playButton} onPress={animateDownload}>
           
            <Animatable.View
            animation={downloaded ? 'rubberBand' : null}
          >
            <Image source={require("../../assets/download.png")} />
          </Animatable.View>
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.playButton} >
            <Image source={require("../../assets/play.png")} />
          </TouchableOpacity>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, {width: "75%"}]} />
          </View>
          <Text style={styles.progressText}>75%</Text>
          <TouchableOpacity style={styles.playButton}>
            <Image source={require("../../assets/download.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.playButton}>
            <Image source={require("../../assets/play.png")} />
          </TouchableOpacity>
          <View style={styles.progressBar}>
          <View style={[styles.progressFill, {width: "25%"}]} />
          </View>
          <Text style={styles.progressText}>25%</Text>
          <TouchableOpacity style={styles.playButton}>
            <Image source={require("../../assets/download.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.playButton}>
            <Image source={require("../../assets/play.png")} />
          </TouchableOpacity>
          <View style={styles.progressBar}>
          <View style={[styles.progressFill, {width: "50%"}]} />
          </View>
          <Text style={styles.progressText}>50%</Text>
          <TouchableOpacity style={styles.playButton}>
            <Image source={require("../../assets/download.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.playButton}>
            <Image source={require("../../assets/play.png")} />
          </TouchableOpacity>
          <View style={styles.progressBar}>
          <View style={[styles.progressFill, {width: "40%"}]} />
          </View>
          <Text style={styles.progressText}>40%</Text>
          <TouchableOpacity style={styles.playButton}>
            <Image source={require("../../assets/download.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  playList: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 13,
    marginBottom: 13,
  },
  playButton: {
    marginRight: 10,
  },
  progressBar: {
    flex: 1,
    height: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
  },
  progressFill: {
    height: "100%",
    width: "50%", // Change this value to set the progress
    backgroundColor: "blue",
    borderRadius: 5,
  },
  progressText: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
  },
});

export default CourseVideo;
