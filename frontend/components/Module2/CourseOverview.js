import React from "react";
import { View, Text } from "react-native";
import { Card } from "@rneui/base";

const CourseOverview = () => {
  return (
    <View>
      <View style={styles.rowContainer}>
        <Card containerStyle={styles.column}>
          <Text style={styles.columnText}>5 Sections</Text>
        </Card>
        <Card containerStyle={styles.column}>
          <Text style={styles.columnText}>20 Videos</Text>
        </Card>
        <Card containerStyle={styles.column}>
          <Text style={styles.columnText}>13 Hours</Text>
        </Card>
      </View>

      <View style={styles.cardContainer}>
        <Text style={styles.courseTitle}>About This Course</Text>

        {/* Course Description */}
        <Text style={styles.courseDescription}>Unlock the World of Cyber Intrigue! Dive into the exhilarating realm of Computer Hacking with our course. Learn to outsmart hackers by thinking like one.
          Join us on a journey through the digital labyrinth of cybersecurity and emerge as the guardian of the virtual realm.</Text>
      </View>
    </View>
  );
};

const styles = {
  cardContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    width: "100%",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 15,
  },
  column: {
    flex: 1,
    backgroundColor: "#D2DEFB",
    borderRadius: 10,
    marginTop: 0,
    // padding: "16 20 20 16",
    alignItems: "center",
    justifyContent: "center",
  },
  columnText: {
    color: "black",
    fontSize: 16,
    // fontWeight: 'bold',
  },

  courseTitle: {
    fontSize: 20,
    marginBottom: 15,
  },
  courseDescription: {
    fontSize: 15,
    marginBottom: 5,
    color: "#979797",
  },
};

export default CourseOverview;
