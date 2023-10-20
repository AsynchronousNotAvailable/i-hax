import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

const SignUpFailedModal = ({ visible, message, onClose }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.7)',
        }}
      >
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>Sign Up Failed</Text>
          <Text>{message}</Text>
          <TouchableOpacity
            style={{ marginTop: 20 }}
            onPress={() => onClose()}
          >
            <Text style={{ fontSize: 18, color: 'blue' }}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SignUpFailedModal;
