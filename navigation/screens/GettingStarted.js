import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import logo from '../../assets/blueTextLogo.png';
import gettingStarted from '../../assets/gettingStarted.png';

const GettingStarted = ({ navigation }) => {
    const handleStartClick = () => {
    navigation.navigate('MainContainer');
  };

  const handleLoginClick = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={gettingStarted} style={styles.gettingStarted} />
      <Image source={logo} style={styles.logo} />
      <Text style={styles.gettingStartedText}>Start your hassle-free and contactless transaction for your train trip with TIKET!</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.startButton} onPress={handleStartClick}>
          <Text style={styles.buttonStart}>START</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLoginClick}>
          <Text style={styles.buttonLogin}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  startButton: {
    backgroundColor: '#2B436C',
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'white',
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
  },
  buttonStart: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonLogin: {
    color: 'black',
    fontWeight: 'bold',
  },
  gettingStarted: {
     width: 250,
    height: 250,
    marginBottom: 20,
  },
  gettingStartedText: {
    fontSize: 18,
    marginBottom: 20,
    padding: 20,
    textAlign: 'center',
  },
});

export default GettingStarted;
