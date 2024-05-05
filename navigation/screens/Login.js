import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Assuming you're using Expo for vector icons
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const Login = () => {
  const navigation = useNavigation(); // Get the navigation object

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleLogin = () => {
    // Simulate checking credentials (Replace this with your actual authentication logic)
    if (email === 'manofsteel@gmail.com' && password === 'password') {
      // Simulate successful login
      setLoginSuccess(true);
      setLoginError('');
      setTimeout(() => {
        setLoginSuccess(false);
        // Navigate to MainContainer screen
        navigation.navigate('MainContainer');
      }, 2000);
    } else {
      // Simulate login failure
      setLoginSuccess(false);
      setLoginError('Invalid email or password');
    }
  };

  const handleRegisterNow = () => {
    // Navigate to the registration form screen
    navigation.navigate('RegistrationForm');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/blueTextLogo.png')} style={styles.logo} />
      <Text style={styles.loginText}><Text style={{ fontWeight: 'bold' }}>L O G I N</Text></Text>
      <View style={styles.hr} />
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}><Text style={{ fontWeight: 'bold' }}>Enter Email</Text></Text>
          <TextInput
            style={styles.inputField}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
            required
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}><Text style={{ fontWeight: 'bold' }}>Enter Password</Text></Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={[styles.inputField, { width: '90%' }]}
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={!showPassword}
              required
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <Feather name="eye" size={24} color="black" style={styles.showPasswordIcon} />
              ) : (
                <Feather name="eye-off" size={24} color="black" style={styles.showPasswordIcon} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      {loginError !== '' && <Text style={styles.errorText}>{loginError}</Text>}
      {loginSuccess && <Text style={styles.successText}>Login successful!</Text>}
      <TouchableOpacity onPress={handleRegisterNow} style={styles.registerText}>
        <Text>New User? <Text style={{ fontWeight: 'bold' }}>Register now</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  loginText: {
    fontSize: 35,
    marginBottom: 30,
  },
  hr: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputField: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showPasswordIcon: {
    marginLeft: 10,
  },
  loginButton: {
    backgroundColor: '#2B436C',
    borderRadius: 15,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  successText: {
    color: 'green',
    marginTop: 10,
  },
  registerText: {
    marginTop: 20,
  },
};

export default Login;
