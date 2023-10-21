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
import GradePage from '../gradePage';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import url from '../url';
import axios from 'axios';
import SignUpFailedModal from '../components/Module1/SignUpFailed';
import LoginPage from './loginPage';

const SignUpPage = ({ navigation }) => {
  const [signUpFailed, setSignUpFailed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigateToNextPage = () => {
    navigation.navigate('LandingPage4'); 
  }
  
  const closeSignUpFailedModal = () => {
    setSignUpFailed(false);
  };
  
    
  
  const [form, setForm] = useState({
    full_name: '',
    username: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirm_password: '',
    university: '',
  });


  const handleSignUp = async () => {
    console.log(form);
    const signUpResponse = await axios.post(`${url}/users/create`, form);
    console.log(signUpResponse.data);
    console.log(signUpResponse.data.message);
    console.log(signUpResponse.status);
    if (signUpResponse.data.message === 'Sign Up Successful') {
      navigation.navigate('GradePage');
    }
    else {
      console.log("Error signing up");
      setSignUpFailed(true);
      setErrorMessage('Sign Up Failed: ' + signUpResponse.data.message);
    
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, }}>
       <SignUpFailedModal
        visible={signUpFailed}
        message={errorMessage}
        onClose={closeSignUpFailedModal}
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={(navigation) => navigateToNextPage(navigation)}
            style={styles.backBtn}>
            <FeatherIcon color="#000000" name="arrow-left" size={28} />
          </TouchableOpacity>

          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.title2}>Sign Up to continue</Text>
        </View>

        <View>
          <View style={styles.form}>
            <View style={styles.input}>
              <TextInput
                onChangeText={full_name => setForm({ ...form, full_name })}
                placeholder="Full name"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.full_name}
              />
              <FeatherIcon style={styles.icon} position= 'absolute' color="#000000" name="user" size={28}  />
            </View>

            <View style={styles.input}>
              <TextInput
                onChangeText={username=> setForm({ ...form, username })}
                placeholder="Username"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.username}
              />
              <FeatherIcon style={styles.icon} position= 'absolute' color="#000000" name="user" size={28}  />
            </View>

            <View style={styles.input}>
            <Image
                //source={{ uri: '/Users/jacksheng/i-hax-frontend/assets/malaysia.png' }}
                source={require('../assets/malaysia.png')}
                style={styles.flag}
              />
              <TextInput
                onChangeText={phoneNumber => setForm({ ...form, phoneNumber })}
                placeholder="Phone number"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.phoneNumber}
              />
              {/* <FeatherIcon style={styles.icon} position= 'absolute' color="#000000" name="mail" size={28}  /> */}
            </View>

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

            <View style={styles.input}>

<TextInput
  autoCorrect={false}
  onChangeText={confirm_password => setForm({ ...form, confirm_password })}
  placeholder="Confirm Password"
  placeholderTextColor="#6b7280"
  style={styles.inputControl}
  secureTextEntry={true}
  value={form.confirm_password}
/>
<Icon style={styles.lock} position= 'absolute' color="#000000" name="lock" size={28}  />
</View>
            <View style={styles.input}>

              <TextInput
                onChangeText={university => setForm({ ...form, university })}
                placeholder="School or Organization"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.university}
              />
              <Icon style={styles.gra_cap} position= 'absolute' color="#000000" name="graduation-cap" size={28}  />
            </View>
            <Text style={styles.terms}>
              Agree to Terms & Conditions
            </Text>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => handleSignUp()}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Sign Up</Text>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flex: 1,
    //position: 'relative',
  },
  header: {
    alignSelf: "center",
    paddingHorizontal: 24,
    
  },
  backBtn: {
    width: 30,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    top: -13,
    right: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#181818',
    paddingHorizontal: 92,
    marginBottom: 20,
  },
  title2: {
    fontSize: 20,
    fontWeight: 'semi-bold',
    color: '#181818',
    marginBottom: 30,
    paddingHorizontal: 24,
    alignSelf: 'center',

  },
  terms: {
    fontSize: 15,
    marginTop: 10,
    paddingHorizontal: 74,
    alignSelf: "center",
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
  inputLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1c1c1e',
    marginBottom: 6,
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
    marginBottom: 12,
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
  gra_cap: {
    left: 10,
    top: 8,
  },
  flag: {
    position: 'absolute',
    maxWidth: 30, 
    maxHeight: 30,
    top: 7,
    left: 5,
    zIndex: 99999,
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
     margin: 5,
    marginTop: 10,
     marginBottom: 20,
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

export default SignUpPage;