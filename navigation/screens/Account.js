import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import supernam from '../../assets/supernam.jpg';

export default function Account() {
    const navigation = useNavigation(); // Initialize navigation
    const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

    // Function to handle navigation to EditProfile screen
    const navigateToEditProfile = () => {
        navigation.navigate('EditProfile'); // Ensure screen name matches MainContainer.js
    };

    const handleSignOut = () => {
        // Perform sign out actions here
        // For example, clear user session, navigate to login screen, etc.
        // After signing out, close the modal
        setModalVisible(false);
        navigation.navigate('Login'); // Navigate to login screen after sign out
    };

    return (
        <View style={styles.container}>
            <View style={styles.container0}>
                <Image source={supernam} style={styles.image} />
                <View style={styles.textContainer0}>
                    <Text style={styles.bigText0}>Rafael Quimson</Text>
                    <Text style={styles.smallText0}>09123456789</Text>
                </View>
            </View>
            <View style={styles.container1}>
                <Text style={styles.bigText1}>Rafael Quimson</Text>
                <Text style={styles.smallText1}>Name</Text>
                <Text style={styles.bigText1}>manofsteel@gmail.com</Text>
                <Text style={styles.smallText1}>Email</Text>
                <Text style={styles.bigText1}>09123456789</Text>
                <Text style={styles.smallText1}>Phone Number</Text>
                <Text style={styles.bigText1}>01/03/2003</Text>
                <Text style={styles.smallText1}>Birthday</Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.bigText}>Philippines</Text>
                <Text style={styles.smallText}>Country</Text>
                <Text style={styles.bigText}>Metro Manila</Text>
                <Text style={styles.smallText}>Region</Text>
                <Text style={styles.bigText}>#69 Kryptonite</Text>
                <Text style={styles.smallText}>Address</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={navigateToEditProfile}>
                    <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>
            </View>

            
            <View style={styles.buttonsContainer1}>
                <TouchableOpacity style={styles.button1} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText1}>Sign Out</Text>
                </TouchableOpacity>
            </View>
<Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Are you sure you want to sign out?</Text>
                        <View style={styles.modalButtonsContainer}>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.modalButtonCancel]}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.modalButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.modalButtonConfirm]}
                                onPress={handleSignOut}
                            >
                                <Text style={styles.modalButtonText}>Sign Out</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
    container0: {
        position: 'absolute',
        flexDirection: 'row',
        backgroundColor: '#2B436C',
        height: 100,
        paddingTop: 15,
        width: '100%',
        zIndex: 10,
    },
    image: {
        width: 60,
        height: 60,
        marginLeft: 30,
        borderRadius: 50,
    },
    textContainer0: {
        flex: 1,
    },
    bigText0: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 8,
        marginLeft: 20,
    },
    smallText0: {
        fontSize: 14,
        color: '#E2DFD2',
        marginLeft: 20,
        marginTop: 2,
    },
    container1: {
        position: 'absolute',
        top: 85, // Adjust the top position as needed
        marginLeft: 20,
        backgroundColor: 'white',
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
    container2: {
        marginTop: 340,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        width: '90%',
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        marginLeft: 20,
    },
    bigText1: {
        fontSize: 20,
        marginTop: 5,
        marginBottom: 3,
        color: 'black',
    },
    smallText1: {
        fontSize: 14,
        color: 'grey',
    },
    bigText: {
        fontSize: 20,
        marginBottom: 5,
    },
    smallText: {
        fontSize: 14,
        color: 'gray',
    },
    buttonsContainer: {
        marginTop: 'auto',
    },
    button: {
        backgroundColor: '#2B436C',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 5,
        marginLeft: 20,
        width: '90%',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    button1: {
        backgroundColor: 'white',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 5,
        borderColor: '#2B436C',
        borderWidth: 2,
        marginLeft: 20,
        width: '90%',
    },
    buttonText1: {
        color: '#2B436C',
        fontSize: 16,
        fontWeight: 'bold',
        borderColor: '#2B436C',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        elevation: 5,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    modalButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    modalButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    modalButtonCancel: {
        backgroundColor: '#ccc',
    },
    modalButtonConfirm: {
        backgroundColor: '#2B436C',
    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
