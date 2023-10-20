import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Card } from "@rneui/base";
import CourseOverview from "../components/Module2/CourseOverview";
import CourseReview from "../components/Module2/CourseReview";
import CourseVideo from "../components/Module2/CourseVideo";

const LearnPublicCourse = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <View style={{ flex: 1 }}>
      {/* Upper Half: Image Background */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/cover.png")}
          style={styles.imageBackground}
          resizeMode="contain"
        />
      </View>

      {/* Lower Half: Card-like Component */}
      <View style={styles.cardContainer}>
        <Card containerStyle={styles.innerCardContainer}>
          {/* Course Title */}
          <Text style={styles.courseTitle}>Computer Hacking</Text>

          {/* Course Description */}
          <Text style={styles.courseDescription}>by Prof. John Ceil</Text>
          <View style={styles.tabBar}>
            <TouchableOpacity
              style={[
                styles.tabButton,
                selectedTab === 1 && styles.selectedTab,
              ]}
              onPress={() => setSelectedTab(1)}
            >
              <Text
                style={[
                  styles.tabButtonText,
                  selectedTab === 1 && styles.selectedTabText,
                ]}
              >
                Overview
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabButton,
                selectedTab === 2 && styles.selectedTab,
              ]}
              onPress={() => setSelectedTab(2)}
            >
              <Text
                style={[
                  styles.tabButtonText,
                  selectedTab === 2 && styles.selectedTabText,
                ]}
              >
                Review
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabButton,
                selectedTab === 3 && styles.selectedTab,
              ]}
              onPress={() => setSelectedTab(3)}
            >
              <Text
                style={[
                  styles.tabButtonText,
                  selectedTab === 3 && styles.selectedTabText,
                ]}
              >
                Playlist
              </Text>
            </TouchableOpacity>
          </View>
          {/* Course Information */}
          {selectedTab === 1 && <CourseOverview />}
          {selectedTab === 2 && <CourseReview />}
          {selectedTab === 3 && <CourseVideo navigation={navigation} />}
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    // Set the desired height for your image container
    height: 250,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  cardContainer: {
    flex: 1,
    // position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  innerCardContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    width: "100%",
    margin: 0,
    height: "100%",
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  courseDescription: {
    fontSize: 12,
    marginBottom: 5,
  },
  tabBar: {
    flexDirection: "row",
    // backgroundColor: "#e0e0e0",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  tabButton: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "white",
    borderBottomWidth: 2, // Add a bottom border
    borderBottomColor: "transparent", // Set a default color
  },
  selectedTab: {
    // backgroundColor: "purple",
    borderBottomColor: "#6562F5",
  },
  tabButtonText: {
    fontSize: 18,
    color: "#979797",
  },
  selectedTabText: {
    color: "#6562F5",
    // textDecorationLine: "underline",
  },
});

export default LearnPublicCourse;
