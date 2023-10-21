import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Achievement = () => {
  const [certificateModalVisible, setCertificateModalVisible] = useState(false);

  const toggleCertificateModal = () => {
    setCertificateModalVisible(!certificateModalVisible);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.levelContainer}>
        <View style={styles.levelBox}>
          <Text style={styles.levelText}>Level 2</Text>
          <Text style={styles.levelDescription}>480xp more to level up</Text>

         
        </View>
        <View style={styles.progressBarContainer}>
  <View style={styles.progressBar}>
    <View style={styles.progressFill}></View>
  </View>
</View>
      </View>
      <Text style={styles.title}>Badges</Text>
      <View style={styles.badgesContainer}>
        <View style={styles.badgeRow}>
          <Image
            source={require("../assets/almost_perfect_badge.png")}
            style={styles.badgeImage}
          />
          <View>
            <Text style={styles.badgeTitle}>Almost Perfect</Text>
            <Text style={styles.badgeDescription}>
              Scored 90% or above on a quiz
            </Text>
          </View>
        </View>
        <View style={styles.badgeRow}>
          <Image
            source={require("../assets/quiz_genius_badge.png")}
            style={styles.badgeImage}
          />
          <View>
            <Text style={styles.badgeTitle}>Quiz Genius</Text>
            <Text style={styles.badgeDescription}>Passed 30 Quizzes</Text>
          </View>
        </View>
      </View>
      <Text style={styles.title}>Medals (5/20)</Text>
      <ScrollView
        horizontal
        contentContainerStyle={styles.medalsContainer}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.medalColumn}>
          <Image
            source={require("../assets/medals1.png")}
            style={styles.medalImage}
          />
          <Text style={styles.medalTitle}>{"  "}Einstein's Apprentice</Text>
          <Text style={styles.medalLevel}>Level 1</Text>
        </View>
        <View style={styles.medalColumn}>
          <Image
            source={require("../assets/medals1.png")}
            style={styles.medalImage}
          />
          <Text style={styles.medalTitle}>Book Worm</Text>
          <Text style={styles.medalLevel}>Level 1</Text>
        </View>
        <View style={styles.medalColumn}>
          <Image
            source={require("../assets/medals1.png")}
            style={styles.medalImage}
          />
          <Text style={styles.medalTitle}>Coding Wizard</Text>
          <Text style={styles.medalLevel}>Level 1</Text>
        </View>
        <View style={styles.medalColumn}>
          <Image
            source={require("../assets/medals2.png")}
            style={styles.medalImage}
          />
          <Text style={styles.medalTitle}>Science Sage</Text>
          <Text style={styles.medalLevel}>Level 2</Text>
        </View>
        <View style={styles.medalColumn}>
          <Image
            source={require("../assets/medals2.png")}
            style={styles.medalImage}
          />
          <Text style={styles.medalTitle}>Math Maestro</Text>
          <Text style={styles.medalLevel}>Level 2</Text>
        </View>
        {/* Add more medals as needed */}
      </ScrollView>
      <Text style={styles.title}>Certificates</Text>
      <View style={styles.certificatesContainer}>
        <View style={styles.certificateRow}>
          <Image
            source={require("../assets/Cert_medal.png")}
            style={styles.certificateImage}
          />
          <View>
            <Text style={styles.certificateTitle}>Programming in Python</Text>
            <Text style={styles.certificateDescription}>
              Grade Achieved 98%
            </Text>
            <Text
              style={styles.certificateLink}
              onPress={toggleCertificateModal}
            >
              View Certificate
            </Text>
            <Modal
              animationType="slide"
              transparent={true}
              visible={certificateModalVisible}
              onRequestClose={toggleCertificateModal}
            >
              <View style={styles.modalContainer}>
                <Image
                  source={require("../assets/certificate.jpg")} // Replace with your certificate image
                  style={styles.certificateImageModal}
                />
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={toggleCertificateModal}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
        </View>
        <View style={styles.certificateRow}>
          <Image
            source={require("../assets/Cert_medal.png")}
            style={styles.certificateImage}
          />
          <View>
            <Text style={styles.certificateTitle}>
              English Speaking & Listening
            </Text>
            <Text style={styles.certificateDescription}>
              Grade Achieved 90%
            </Text>
            {/* Add functionality to display the certificate image when clicked */}
            <Text
              style={styles.certificateLink}
              onPress={toggleCertificateModal}
            >
              View Certificate
            </Text>
          </View>
        </View>
        {/* more certificates lolll */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  levelContainer: {
    backgroundColor: "#DCD8EB",
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
    
  },
  levelBox: {
    alignItems: "left",
  },
  levelText: {
    fontSize: 20,
  },
  levelDescription: {
    fontSize: 14,
    color: "#9098A3",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  badgesContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 10,
    padding: 25,
  },
  badgeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  badgeImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  badgeTitle: {
    fontSize: 16,
  },
  badgeDescription: {
    fontSize: 12,
    color: "#9098A3",
  },
  medalsContainer: {
    flexDirection: "row",
    marginVertical: 10,
    paddingVertical: 10, // Added padding for better spacing
  },
  medalColumn: {
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: "center",
    padding: 10,
    width: 140, // Adjusted width for better spacing
  },
  medalImage: {
    width: 70,
    height: 70,
  },
  medalTitle: {
    fontSize: 14,
    alignSelf: "center",
  },
  medalLevel: {
    fontSize: 12,
    color: "#7AB4A1",
  },
  certificatesContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 10,
    padding: 25,
  },
  certificateRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  certificateImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  certificateTitle: {
    fontSize: 16,
  },
  certificateDescription: {
    fontSize: 12,
    color: "#9098A3",
  },
  certificateLink: {
    color: "blue",
    textDecorationLine: "underline",
    fontSize: 12,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: "#F1F1F1",
    borderRadius: 5,
    marginTop: 10,
  },
  progressBar: {
    flex: 1, // Fill the container
    flexDirection: "row",
    backgroundColor: "gray", // The default color (unfilled)
    borderRadius: 8,
  },
  progressFill: {
    flex: 0.6, // Fills the progress bar
    backgroundColor: "green", // The filled section's color
    borderRadius: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  certificateImageModal: {
    width: 330,
    height: 260,
  },
  closeButton: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: "black",
  },
});

export default Achievement;
