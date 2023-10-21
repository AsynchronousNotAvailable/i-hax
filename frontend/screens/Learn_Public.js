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
      imageSource: require("../assets/computer.png"),
      text: "Computer Hacking",
    },
    { id: 2, imageSource: require("../assets/math.png"), text: "Mathematics" },
    { id: 3, imageSource: require("../assets/python.png"), text: "Python" },
    { id: 4, imageSource: require("../assets/java.png"), text: "Java" },
  ];

  const coursesRow2 = [
    {
      id: 5,
      imageSource: require("../assets/cloud.png"),
      text: "Cloud Computing",
    },
    {
      id: 6,
      imageSource: require("../assets/quantum1.png"),
      text: "Quantum Computing I",
    },
    {
      id: 7,
      imageSource: require("../assets/quantum2.png"),
      text: "Quantum Computing II",
    },
    {
      id: 8,
      imageSource: require("../assets/mathcs.png"),
      text: "Mathematics & Computer Science",
    },
    {
      id: 9,
      imageSource: require("../assets/computing.png"),
      text: "Mathematics in Computing",
    },
  ];

  const coursesRow3 = [
    {
      id: 10,
      imageSource: require("../assets/computer.png"),
      text: "Computer Hacking",
    },
    { id: 11, imageSource: require("../assets/math.png"), text: "Mathematics" },
    {
      id: 12,
      imageSource: require("../assets/quantum1.png"),
      text: "Quantum Computing I",
    },
    {
      id: 13,
      imageSource: require("../assets/quantum2.png"),
      text: "Quantum Computing II",
    },
    {
      id: 14,
      imageSource: require("../assets/computing.png"),
      text: "Mathematics in Computing",
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
      <TouchableOpacity onPress={() => navigation.navigate("Computer Hacking")}>
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
    height: 180
    
    
  },
  columnContainer: {
    margin: 10,
  },
  courseImage: {
    width: 135,
    height: 170,
    borderRadius: 8, // Adding border radius to the image
  },
  transparentLayer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(217, 217, 217, 0.5)",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 5,
  },
  courseText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
export default LearnPublic;
