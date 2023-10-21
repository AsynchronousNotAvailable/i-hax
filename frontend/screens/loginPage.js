import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import url from '../url';
import SignUpFailedModal from '../components/Module1/SignUpFailed';



const LoginPage = ({ navigation, route }) => {
  const { setAuthenticated } = route.params;
  const [loginFailed, setLoginFailed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const closeLoginFailedModal = () => {
    setLoginFailed(false);
  };
  
  const handleLogin = async () => {
    console.log(form);
    const loginResponse = await axios.post(`${url}/auth/login`, form);
    console.log(loginResponse.data);
    if (loginResponse.data.message === "Login successful") {
      await AsyncStorage.setItem('userToken', loginResponse.data.access_token);
      setAuthenticated(true);
    }
    else {
      setLoginFailed(true);
      setErrorMessage("Login Error: Credentials Not Match")
      await AsyncStorage.setItem('userToken', loginResponse.data.access_token);
      setAuthenticated(true);
    }
        
    }

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  // go back to previous page
    const goBack = () => {
      navigation.navigate('LandingPage4'); 
    }
  
  return (
    <SafeAreaView style={{ flex: 1, }}>
      <SignUpFailedModal
        visible={loginFailed}
        message={errorMessage}
        onClose={closeLoginFailedModal}
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={(navigation) => goBack(navigation)}
            style={styles.backBtn}>
            <FeatherIcon color="#000000" name="arrow-left" size={28} />
          </TouchableOpacity>

          <Text style={styles.title}>Welcome back!</Text>
          <Text style={styles.title2}>Log In to continue</Text>
        </View>

        <View>
          <View style={styles.form}>

          <View style={styles.input}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={email => setForm({ ...form, email })}
                placeholder="email"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.email}
              />
               <FeatherIcon style={styles.icon} position= 'absolute' color="#000000" name="mail" size={28}  />
            </View>

            <View style={styles.input}>

              <TextInput
                autoCorrect={false}
                onChangeText={password => setForm({ ...form, password })}
                placeholder="Password"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={form.password}
              />
              <Icon style={styles.lock} position= 'absolute' color="#000000" name="lock" size={28}  />
            </View>
            <Text style={styles.terms}>
              Agree to Terms & Conditions
            </Text>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                  handleLogin();
                }}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Sign In</Text>
                </View>
                <FeatherIcon position= 'absolute' color="#ffffff" name="arrow-right" size={28} 
                  style={styles.forwardIcon}/>
              </TouchableOpacity>
            </View>

            <Text style={styles.formFooter}>
              {/* By clicking "Sign up", you agree to our
              <Text style={{ color: '#45464E', fontWeight: '600' }}>
                {' '}
                Terms & Conditions{' '}
              </Text>
              and
              <Text style={{ color: '#45464E', fontWeight: '600' }}>
                {' '}
                Privacy Policy
              </Text>
              . */}
              Or Continue With
            </Text>
            <View style={{flexDirection: "column", justifyContent: "space-between"}}>
            <View style={styles.appleGoog}>
              <Image 
              //source={{ uri: '/Users/jacksheng/i-hax-frontend/assets/malaysia.png' }}
              source={require('../assets/search.png')}
              style={styles.google}
              />
             <Icon style={styles.apple}  color="#000000" name="apple" size={30}  />
              </View>
              <View style={styles.signUpAlr}>
              <Text style={styles.alrText}>Don't have an account? <Text style={styles.signUpText}>SIGN UP</Text></Text>
              
            </View>
            </View>
            
            
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flex: 1,
    height: "100%"
    //position: 'relative',
  },
  header: {
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center"
  },
  backBtn: {
    width: 30,
    height: 40,
    alignSelf: "left",
    justifyContent: 'center',
    marginBottom: 16,
    top: -13,
    right: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#181818',
    paddingHorizontal: 60,
    alignSelf: "center",
    marginBottom: 10
  },
  title2: {
    fontSize: 20,
    fontWeight: 'semi-bold',
    color: '#181818',
    marginBottom: 30,
    paddingHorizontal: 40,
    alignSelf: "center",
  },
  terms: {
    fontSize: 15,
    // paddingHorizontal: 74,
    left: 10,
    alignSelf: "center",
    fontWeight: '600',
    color: "#545454"
  },
  form: {
    paddingHorizontal: 24,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 15,
    lineHeight: 15,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingHorizontal: 50,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#24262e',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    marginBottom: 20,
  },
  email: {
    marginBottom: 12,
    position: 'relative',
  },
  btn: {
    //flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderWidth: 1,
    backgroundColor: '#6562F5',
    borderColor: '#6562F5',
  },
  icon: {
    top: 7,
    left: 10,
  },
  lock: {
    left: 16,
    top: 9,
  },
  forwardIcon: {
    width: 40,
     height: 40,
     borderRadius: 20,
     alignItems: 'center',
     justifyContent: 'center',
    //backgroundColor: '#ffffff',
     top: 13,
     left: 290,
  },
  google: {
    maxWidth: 25, 
    maxHeight: 25,
    left: 90,
    top: 10,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    //flexDirection: 'row',
  },
  apple: {
    top: 5,
    right: 80,
  },
  appleGoog: {
     flexDirection: 'row',
     justifyContent: 'space-between',
    alignSelf: "center",
    marginTop: 10,
     marginBottom: 30,
  },
  signUpText: {
    
    color: "#0961F5",
    fontWeight: '600',
    fontSize: 14
  },
  alrText: {
    
    fontSize: 14,
    fontWeight: '400',
    color: "#545454"
    
    
  },
  signUpAlr: {
    flexDirection: "row",
    alignSelf: "center",
    
  }
});

export default LoginPage;