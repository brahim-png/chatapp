import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Dimensions } from 'react-native';
import io from 'socket.io-client';
import LoginScreen from './components/LoginScreen';
import ChatListScreen from './components/ChaListtScreen';
import HomeScreen from './components/HomeScreen';
import GroupScreen from './components/GroupScreen';

const socket = io("http://10.0.0.160:3001"); // Replace with your server URL

const Stack = createStackNavigator();
const { width, height } = Dimensions.get('window');

export default function App() {
  console.log("App component rendered");
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ChatList" component={ChatListScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Group" component={GroupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E2E4A',
  },
  header: {
    padding: width * 0.05,
    backgroundColor: '#007BFF',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: width * 0.05,
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginBottom: height * 0.02,
  },
  input: {
    width: '100%',
    height: height * 0.06,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.03,
    marginBottom: height * 0.01,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    height: height * 0.07,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.03,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginVertical: height * 0.01,
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  footer: {
    padding: width * 0.03,
    backgroundColor: '#007BFF',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: width * 0.035,
  },
  chatButton: {
    backgroundColor: '#007BFF',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.05,
    borderRadius: width * 0.03,
    marginVertical: height * 0.01,
    alignItems: 'center',
  },
  chatButtonText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
  messageList: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  message: {
    padding: width * 0.04,
    backgroundColor: '#e1ffc7',
    marginVertical: height * 0.01,
    borderRadius: width * 0.03,
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: height * 0.01,
    backgroundColor: '#fff',
  },
});
