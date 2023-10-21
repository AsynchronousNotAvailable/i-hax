import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const Language = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Arabic', 'Other'];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const handleSaveLanguage = () => {
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
    navigation.goBack(); // This navigates back to the previous screen (tab).
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Switch to your preferred language by selecting the menu below</Text>
      
      <View style={styles.languageFrame}>
        <ScrollView contentContainerStyle={styles.languageList}>
          {languages.map((language, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.languageButton,
                selectedLanguage === language ? styles.selectedLanguage : null
              ]}
              onPress={() => handleLanguageSelect(language)}
            >
              <Text style={styles.languageText}>{language}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveLanguage}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Language updated.</Text>
          <TouchableOpacity style={styles.modalCloseButton} onPress={handleClose}>
            <Text style={styles.modalCloseButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    width: "80%"
  },
  languageFrame: {
    backgroundColor: '#E0E5EB',
    borderRadius: 10,
    width: '80%',
    maxHeight: 250,
  },
  languageList: {
    padding: 10,
  },
  languageButton: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
  },
  selectedLanguage: {
    backgroundColor: '#A389EB',
    borderRadius: 10
  },
  languageText: {
    fontSize: 16,
    color: 'black',
  },
  saveButton: {
    backgroundColor: '#A389EB',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  saveButtonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalText: {
    fontSize: 20,
    color: 'white',
  },
  modalCloseButton: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  modalCloseButtonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default Language;
