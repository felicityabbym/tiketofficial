import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AirbnbRating } from 'react-native-ratings';
import supernam from '../../assets/supernam.jpg';
import EditProfile from '../screens/EditProfile';

export default function Rating() {
    const navigation = useNavigation();

    const navigateToEditProfile = () => {
        Alert.alert("Thanks for rating us!", "", [{ text: "OK" }]);
    };

    const handleRatingChange = (rating) => {
        console.log(`Rating: ${rating}`); // Log the rating value
        // Handle rating change as needed
    };

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.thankYouText}>Thanks for rating us!</Text>
                <Image source={require('../../assets/smile.png')} style={styles.smileImage} />
                <AirbnbRating
                    count={5}
                    reviews={['Hate it', 'Bad', 'Okay', 'Good', 'Great!']}
                    defaultRating={0}
                    size={35}
                    onFinishRating={handleRatingChange}
                    ratingTextStyle={styles.ratingText}
                />
                <Text style={styles.journeyText}>
                    From booking to rating, your satisfaction drives our journey.
                </Text>
            </View>
            
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={navigateToEditProfile}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
    container1: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 85,
        marginLeft: 20,
        backgroundColor: '#2B436C',
        padding: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        borderRadius: 8,
        width: '90%',
        elevation: 10,
        zIndex: 12,
    },
    thankYouText: {
        fontSize: 23,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    smileImage: {
        width: 100,
        height: 100,
    },
    journeyText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        marginTop: 20,
    },
    buttonsContainer: {
        marginTop: 'auto',
    },
    button: {
        backgroundColor: '#2B436C',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 15,
        marginLeft: 20,
        width: '90%',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
