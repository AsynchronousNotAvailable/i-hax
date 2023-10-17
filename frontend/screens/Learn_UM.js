import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const LearnPublic = ({ navigation, searchText }) => {
  const coursesRow1 = [
    {
      id: 1,
      imageSource: require("../assets/data.png"),
      text: "Fundamental Of Programming",
    },
    { id: 2, imageSource: require("../assets/code1.png"), text: "Data Structure" },
    { id: 3, imageSource: require("../assets/cloud2.png"), text: "Data Analysis" },
    { id: 4, imageSource: require("../assets/ml.png"), text: "Machine Learning" },
  ];

  const coursesRow2 = [
    {
      id: 5,
      imageSource: require("../assets/pyq.png"),
      text: "WIA2007",
    },
    {
      id: 6,
      imageSource: require("../assets/pyq.png"),
      text: "WIX2002",
    },
    {
      id: 7,
      imageSource: require("../assets/pyq.png"),
      text: "WIA2001",
    },
    {
      id: 8,
      imageSource: require("../assets/pyq.png"),
      text: "WIX2001",
    },
    {
      id: 9,
      imageSource: require("../assets/pyq.png"),
      text: "WIA1002",
    },
  ];

  const coursesRow3 = [
    {
      id: 10,
      imageSource: require("../assets/pyq.png"),
      text: "WIA2007",
    },
    { id: 11, imageSource: require("../assets/calculus.png"), text: "Calculus" },
    {
      id: 12,
      imageSource: require("../assets/code2.png"),
      text: "Data Structure",
    },
    {
      id: 13,
      imageSource: require("../assets/data.png"),
      text: "Fundamentals of Programming",
    },
    {
      id: 14,
      imageSource: require("../assets/ml.png"),
      text: "Machine Learning",
    },
  ];

  const filteredCoursesRow1 = coursesRow1.filter((course) =>
    course.text.toLowerCase().includes(searchText.toLowerCase())
  );
  const filteredCoursesRow2 = coursesRow2.filter((course) =>
    course.text.toLowerCase().includes(searchText.toLowerCase())
  );
  const filteredCoursesRow3 = coursesRow3.filter((course) =>
    course.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
   
    <View style={styles.cardContainer}>

      <View style={styles.textHolder}><Text style={styles.headerText}>Courses</Text></View>
      
      {/* <View style={styles.scrollViewHolder}> */}
      <View style={styles.rowContainer}>
      <ScrollView horizontal>
        
          {filteredCoursesRow1.map((course) => (
            <CourseColumn
              key={course.id}
              navigation={navigation}
              imageSource={course.imageSource}
              text={course.text}
            />
          ))}
       
      </ScrollView>
      </View>
      {/* </View> */}

      <View style={styles.textHolder}><Text style={styles.headerText}>E-Books</Text></View>
      <ScrollView horizontal>
        <View style={styles.rowContainer}>
          {filteredCoursesRow2.map((course) => (
            <CourseColumn
              key={course.id}
              navigation={navigation}
              imageSource={course.imageSource}
              text={course.text}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.textHolder}><Text style={styles.headerText}>Recent-Viewed</Text></View>
      <ScrollView horizontal>
        <View style={styles.rowContainer}>
          {filteredCoursesRow3.map((course) => (
            <CourseColumn
              key={course.id}
              navigation={navigation}
              imageSource={course.imageSource}
              text={course.text}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const CourseColumn = ({ navigation, imageSource, text }) => {
  return (
    <View style={styles.columnContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("CourseDetails")}>
        <Image source={imageSource} style={styles.courseImage} />
        <View style={styles.transparentLayer}>
          <Text style={styles.courseText}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    
  },
  tabsContainer: {
    flexDirection: "row",
    backgroundColor: "#E8EBFF",
    justifyContent: "space-between",
  },
  tabButton: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8EBFF",
    borderRadius: 10,
  },
  tabButtonText: {
    fontSize: 16,
    color: "white",
  },
  selectedTabButton: {
    backgroundColor: "#E8EBFF",
  },
  selectedTabButtonText: {
    color: "black",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "semi-bold",
    margin: 10,
    position: "relative",
  },
  scrollViewHolder: {
    height: 150,
  },
  textHolder: {
    
    alignItems: "center",
    width: "100%",
  },
  rowContainer: {
    flexDirection: "row",
    // flex: 1,
    height: 150
    
    
  },
  columnContainer: {
    margin: 10,
  },
  courseImage: {
    width: 120,
    height: 140,
    borderRadius: 10, // Adding border radius to the image
  },
  transparentLayer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(217, 217, 217, 0.5)",
    padding: 5,
  },
  courseText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
export default LearnPublic;
