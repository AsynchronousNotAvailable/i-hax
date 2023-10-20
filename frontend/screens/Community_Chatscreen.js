import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

const CommunityMessage = ({route}) => {
  const {item} = route.params;
  const [messages, setMessages] = useState([ { text:item.msg, type: 'received' },]);
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message) {
      setMessages([...messages, { text: message, type: 'sent' }]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chatContainer}>
        {messages.map((message, index) => (
          <View key={index} style={message.type === 'sent' ? styles.sentMessage : styles.receivedMessage}>
            <Text>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message"
          value={message}
          onChangeText={(text) => setMessage(text)}
          onSubmitEditing={sendMessage}
          multiline={false}
        />
        <Button title="Send" onPress={sendMessage} color='#8B89F7' style={{paddingLeft:5}}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  chatContainer: {
    flex: 1,
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'white',
    height:50,
  },
  input: {
    flex: 1,
    marginRight: 8,
    paddingLeft: 10
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#D5D4FF',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    fontSize: 20,
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    fontSize: 20,
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CommunityMessage;
