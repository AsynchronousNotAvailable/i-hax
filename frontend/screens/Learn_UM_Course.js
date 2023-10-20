import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import * as Speech from 'expo-speech';




const LearnUMCourse = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const text = `Polymorphism. Polymorphism refers
  to the ability to associate many meanings to one method name
  using late binding or dynamic binding. Binding refers to
  the process of associating a method definition with a method
  advocation. Early Binding associates a method definition with the method invocation when
  the method is invoked (at run time). Java does not use late binding with private methods, methods
  with the final modifier, and static methods. Polymorphism. An object of a derived class has the type of its base class. Assigning an object of a derived class to a variable of base
  classis often called upcasting. BaseClass a = new BaseClass; DerivedClass b = new DerivedClass; a = b;`;
  
  const toggleSpeech = () => {
    if (isSpeaking) {
      // If speaking, stop speech
      Speech.stop();
    } else {
      // If not speaking, start speech
      Speech.speak(text);
    }
    setIsSpeaking(!isSpeaking);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView vertical>
        <View style={styles.pageContainer}>
          <View style={styles.paragraph}>
            <Text style={styles.subtopic}>Polymorphism</Text>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Image
                source={require("../assets/point.png")}
                style={styles.point}
              />
              <Text style={styles.description}>
                <Text style={{ fontWeight: "bold" }}>Polymorphism</Text> refers
                to the ability to associate many meanings to one method name
                using late binding or dynamic binding
              </Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Image
                source={require("../assets/point.png")}
                style={styles.point}
              />
              <Text style={styles.description}>
                <Text style={{ fontWeight: "bold" }}>Binding</Text> refers to
                the process of associating a method definition with a method
                advocation.
              </Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Image
                source={require("../assets/point.png")}
                style={styles.point}
              />
              <Text style={styles.description}>
                <Text style={{ fontWeight: "bold" }}>Early Binding</Text>{" "}
                associates a method definition with the method advocation when
                the code is compiled.
              </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Image
                source={require("../assets/point.png")}
                style={styles.point}
              />
              <Text style={styles.description}>
                <Text style={{ fontWeight: "bold" }}>
                  Late Binding / Dynamic Binding
                </Text>{" "}
                associates a method definition with the method invocation when
                the method is invoked (at run time)
              </Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Image
                source={require("../assets/point.png")}
                style={styles.point}
              />
              <Text style={styles.description}>
                Java does not use late binding with private methods, methods
                with the final modifier, and static methods.
              </Text>
            </View>
          </View>
          <View style={styles.paragraph}>
            <Text style={styles.subtopic}>Polymorphism</Text>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Image
                source={require("../assets/point.png")}
                style={styles.point}
              />
              <Text style={styles.description}>
                An object of a derived class has the type of its base class.
              </Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Image
                source={require("../assets/point.png")}
                style={styles.point}
              />
              <Text style={styles.description}>
                Assigning an object of a derived class to a variable of base
                classis often called
                <Text style={{ fontWeight: "bold" }}> upcasting</Text>
              </Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  width: "92%",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                BaseClass a = new BaseClass;
              </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  width: "92%",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                DerivedClass b = new DerivedClass;
              </Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  width: "92%",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                a = b;
              </Text>
            </View>
          </View>

          <View style={styles.paragraph}>
            <Text style={styles.subtopic}>Abstract Classes</Text>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Image
                source={require("../assets/point.png")}
                style={styles.point}
              />
              <Text style={styles.description}>
                An abstract class is a class that has{" "}
                <Text style={{ fontWeight: "bold" }}>
                  some methods without complete definitions.
                </Text>
                A class with no abstract methods is called a concrete class.
              </Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Image
                source={require("../assets/point.png")}
                style={styles.point}
              />
              <Text style={styles.description}>
                Object can't be created using abstract class constructor.
              </Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Image
                source={require("../assets/point.png")}
                style={styles.point}
              />
              <Text style={styles.description}>
                An <Text style={{ fontWeight: "bold" }}>abstract method</Text>{" "}
                serves as a placeholder for a method that will be fully defined
                in a descendant class. It has
                <Text style={{ fontWeight: "bold" }}> no method body</Text>
              </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Image
                source={require("../assets/point.png")}
                style={styles.point}
              />
              <Text style={styles.description}>
                <Text style={{ fontWeight: "bold" }}>
                  Late Binding / Dynamic Binding
                </Text>{" "}
                associates a method definition with the method invocation when
                the method is invoked (at run time)
              </Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Image
                source={require("../assets/point.png")}
                style={styles.point}
              />
              <Text style={styles.description}>
                Java does not use late binding with private methods, methods
                with the final modifier, and static methods.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.floatingButton} onPress={toggleSpeech}>
        <Image source={require("../assets/sound.png")} style={{ height: 30, width: 30 }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  paragraph: {
    // marginTop: 10,
    // marginBottom: 10,
    padding: 15,
    flexDirection: "column",
    width: "100%",
  },
  subtopic: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#25044F",
    marginBottom: 10, // Increase the bottom margin
  },
  columnContainer: {
    flexDirection: "row",
  },
  point: { marginTop: 10, marginRight: 10, height: 15, width: 15 },
  descriptionContainer: {
    flexDirection: "column",
    width: "100%",
  },
  description: {
    fontSize: 15,
    textAlign: "left",
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
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
  floatingButton: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "white",
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  floatingButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default LearnUMCourse;
