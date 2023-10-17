import React from 'react';
import { View, Text } from 'react-native';
import { Card } from '@rneui/base';

const CourseOverview = () => {
  return (
    <Card containerStyle={styles.cardContainer}>
      {/* Row Container with 3 Columns */}
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

      {/* Course Title */}
      <Text style={styles.courseTitle}>Course Title</Text>

      {/* Course Description */}
      <Text style={styles.courseDescription}>
        This is the description of the course. You can provide more details about the course here.
      </Text>
    </Card>
  );
};

const styles = {
  cardContainer: {
    margin: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  column: {
    flex: 1,
    backgroundColor: '#6A1B9A',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  columnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  courseDescription: {
    fontSize: 16,
  },
};

export default CourseOverview;
