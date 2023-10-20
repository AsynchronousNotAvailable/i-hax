import React, { useState } from "react";
import LearnPublic from "./Learn_Public";
import LearnUM from "./Learn_UM";

import { StyleSheet, TouchableOpacity, View, Text, TextInput, ScrollView} from "react-native";


function Learn_Page({navigation}) {
  const [selectedTab, setSelectedTab] = useState(1);
  const [searchText, setSearchText] = useState("");
  return (
    <View style={styles.cardContainer}>
       <TextInput
        style={styles.searchBar}
        placeholder="Search for courses..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 1 ? styles.selectedTabButton : null,
          ]}
          onPress={() => setSelectedTab(1)}
        >
          <Text
            style={[
              styles.tabButtonText,
              selectedTab === 1 ? styles.selectedTabButtonText : null,
            ]}
          >
            Public
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 2 ? styles.selectedTabButton : null,
          ]}
          onPress={() => setSelectedTab(2)}
        >
          <Text
            style={[
              styles.tabButtonText,
              selectedTab === 2 ? styles.selectedTabButtonText : null,
            ]}
          >
            University Malaya
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView vertical>
        {selectedTab === 1 && <LearnPublic navigation={navigation} searchText={searchText} />}
      {selectedTab === 2 && <LearnUM navigation={navigation} searchText={searchText} />}
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    backgroundColor: "white",
    height: "100%",
    alignItems: "center",
  },
  searchBar: {
    backgroundColor: "#E8EBFF",
    marginTop: 20,
    padding: 10,
    borderRadius: 10, // Add border radius
    width: "70%", // Set the width of the search bar
  },
  tabsContainer: {
    flexDirection: "row",
    backgroundColor: "#E8EBFF",
    justifyContent: "space-between",
    paddingHorizontal: 0, // Added padding
    marginVertical: 20, // Add vertical margin
    borderRadius: 15, // Add border radius
    width: "80%", // Set the width of the tabs container
    
  },
  tabButton: {
    flex: 1,
    padding: 2,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8EBFF",
    borderRadius: 15,
    margin: 10
     // Add border radius
  },
  tabButtonText: {
    fontSize: 16,
    color: "#0C34C0",
  },
  selectedTabButton: {
    backgroundColor: "#FFFFFF",
    
     // Added padding to selected tab
  },
  selectedTabButtonText: {
    color: "#0C34C0",
    
  },
  headerText: {
    fontSize: 20,
    fontWeight: "semi-bold",
    margin: 10,
  },
  rowContainer: {
    flexDirection: "row",
    flex: 1,
    marginVertical: 5,
  },
  columnContainer: {
    margin: 10,
  },
  courseImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
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

export default Learn_Page;
