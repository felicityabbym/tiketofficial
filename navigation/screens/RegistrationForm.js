import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Assuming you're using Expo for vector icons
import logo from '../../assets/blueTextLogo.png';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const RegistrationForm = () => {
  const navigation = useNavigation(); // Get the navigation object

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showReenterPassword, setShowReenterPassword] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const handleSubmit = () => {
    const newErrors = {};

    // Full Name validation
    if (!fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }

    // Email validation
    if (!email || !email.includes('@')) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!password || password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Re-enter Password validation
    if (password !== reenterPassword) {
      newErrors.reenterPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Simulate registration success
      setRegistrationSuccess(true);
      setTimeout(() => {
        setRegistrationSuccess(false);
      }, 2000);

      // Reset form fields
      setFullName('');
      setEmail('');
      setPassword('');
      setReenterPassword('');
    }
  };

  return (
    <View style={styles.registrationContainer}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.registrationHeader}>R E G I S T R A T I O N</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.inputField, errors.fullName && styles.inputError]}
            placeholder="Full Name"
            value={fullName}
            onChangeText={(text) => setFullName(text)}
            required
          />
          {errors.fullName && <Text style={styles.error}>{errors.fullName}</Text>}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.inputField, errors.email && styles.inputError]}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
            required
          />
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={[styles.inputField, errors.password && styles.inputError, { width: '90%' }]}
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
          {errors.password && <Text style={styles.error}>{errors.password}</Text>}
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={[styles.inputField, errors.password && styles.inputError, { width: '90%' }]}
              placeholder="Re-enter Password"
              value={reenterPassword}
              onChangeText={(text) => setReenterPassword(text)}
              secureTextEntry={!showReenterPassword}
              required
            />
            <TouchableOpacity onPress={() => setShowReenterPassword(!showReenterPassword)}>
              {showReenterPassword ? (
                <Feather name="eye" size={24} color="black" style={styles.showPasswordIcon} />
              ) : (
                <Feather name="eye-off" size={24} color="black" style={styles.showPasswordIcon} />
              )}
            </TouchableOpacity>
          </View>
          {errors.reenterPassword && <Text style={styles.error}>{errors.reenterPassword}</Text>}
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      {registrationSuccess && <Text style={styles.successMessage}>Successfully Registered</Text>}
      <Text style={styles.loginText}>Existing User? <Text style={{ fontWeight: 'bold' }} onPress={goToLogin}>Login</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  registrationContainer: {
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
  registrationHeader: {
    fontSize: 35,
    marginBottom: 25,
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 20,
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
  inputError: {
    borderColor: 'red',
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
  submitButton: {
    backgroundColor: '#2B436C',
    borderRadius: 15,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 15,
  },
  successMessage: {
    marginTop: 10,
    color: 'green',
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 20,
  },
});

export default RegistrationForm;
