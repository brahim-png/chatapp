import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

function LoginScreen({ navigation }) {
  console.log("LoginScreen component rendered");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    // For now, we'll just navigate to the ChatList screen
    navigation.navigate('ChatList');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.header}>
        <View style={styles.headerBlur}></View>
        <Text style={styles.headerTitle}>CHATAPP</Text>
      </View>
      <View style={styles.loginBox}>
        <View style={styles.loginBoxBlur}></View>
        <View style={styles.loginBoxContent}>
          <Text style={styles.loginTitle}>LOGIN</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              value={username}
              onChangeText={setUsername}
              placeholderTextColor="#333"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholderTextColor="#333"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>GO</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerBlur}></View>
        <Text style={styles.footerText}>© 2023 ChatApp. All rights reserved.</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E2E4A',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    position: 'absolute',
    width: width,
    height: height * 0.15,
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBlur: {
    position: 'absolute',
    width: width,
    height: height * 0.15,
    backgroundColor: 'black',
    opacity: 0.2,
    shadowColor: 'black',
    shadowOffset: { width: 37, height: 37 },
    shadowOpacity: 1,
    shadowRadius: 37,
    filter: 'blur(37px)',
  },
  headerTitle: {
    color: 'white',
    fontSize: 60,
    fontWeight: '400',
    fontFamily: 'Jaro',
    textAlign: 'center',
  },
  loginBox: {
    width: width * 0.8,
    height: height * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.2,
  },
  loginBoxBlur: {
    position: 'absolute',
    width: width * 0.78,
    height: height * 0.48,
    backgroundColor: '#6D8AB6',
    opacity: 0.75,
    shadowColor: 'black',
    shadowOffset: { width: 36, height: 36 },
    shadowOpacity: 1,
    shadowRadius: 36,
    borderRadius: 44,
    filter: 'blur(36px)',
  },
  loginBoxContent: {
    width: width * 0.78,
    height: height * 0.48,
    backgroundColor: '#6D8AB6',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 36,
    borderRadius: 44,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTitle: {
    color: 'white',
    fontSize: 50,
    fontWeight: '400',
    fontFamily: 'Jaro',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginVertical: 10,
  },
  label: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Jaro',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    padding: 10,
    backgroundColor: '#96B5E3',
    borderRadius: 13,
    borderWidth: 0,
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: 150,
    height: 50,
    marginVertical: 20,
    backgroundColor: '#96B5E3',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Jaro',
    fontWeight: '400',
  },
  footer: {
    position: 'absolute',
    width: width,
    height: height * 0.05,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerBlur: {
    position: 'absolute',
    width: width,
    height: height * 0.05,
    backgroundColor: 'white',
    opacity: 0.75,
    shadowColor: 'black',
    shadowOffset: { width: 25, height: 25 },
    shadowOpacity: 1,
    shadowRadius: 25,
    filter: 'blur(25px)',
  },
  footerText: {
    color: '#1E2E4A',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Jaro',
    textAlign: 'center',
  },
});

export default LoginScreen;