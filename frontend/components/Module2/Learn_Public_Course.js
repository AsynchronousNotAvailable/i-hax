import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Card } from "@rneui/base";
import CourseOverview from "./CourseOverview";
import CourseReview from "./CourseReview";
import CourseVideo from "./CourseVideo";

const LearnPublicCourse = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <View style={{ flex: 1 }}>
      {/* Upper Half: Image Background */}
      <Image
        source={require("../../assets/graphic.png")}
        style={styles.imageBackground}
      />

      {/* Lower Half: Card-like Component */}
      <View style={styles.cardContainer}>
        <Card containerStyle={styles.innerCardContainer}>
          <View style={styles.tabBar}>
            <TouchableOpacity
              style={styles.tabButton}
              onPress={() => setSelectedTab(1)}
            >
              <Text style={styles.tabButtonText}>Tab 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tabButton}
              onPress={() => setSelectedTab(2)}
            >
              <Text style={styles.tabButtonText}>Tab 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tabButton}
              onPress={() => setSelectedTab(3)}
            >
              <Text style={styles.tabButtonText}>Tab 3</Text>
            </TouchableOpacity>
          </View>
          {/* Course Information */}
          {selectedTab === 1 && <CourseOverview />}
          {selectedTab === 2 && <CourseReview />}
          {selectedTab === 3 && <CourseVideo />}
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    height: "50%",
  },
  cardContainer: {
    flex: 1,
    position: "absolute",
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
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#e0e0e0",
    padding: 10,
    justifyContent: "space-between",
  },
  tabButton: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  tabButtonText: {
    fontSize: 16,
  },
});

export default LearnPublicCourse;
