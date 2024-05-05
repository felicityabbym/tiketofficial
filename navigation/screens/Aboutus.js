import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Aboutus() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={[styles.text, { marginTop: 5, textAlign: 'center', fontSize: 20, color: 'black' }]}>
                    T I K E T : Online Train {'\n'} Ticketing System
                </Text>
            </View>

            {/* Project Description */}
            <View style={styles.projectdesc}>
                {/* First Inner Row */}
                <View style={styles.cardRow}>
                    <View style={styles.row}>
                        <Text style={[styles.text, {marginTop: 10, marginLeft: '1%', marginBottom: 10}]}>
                            A portable ticketing application for the {'\n'}
                            LRT and MRT transportation where they 
                            can buy a ticket with just click {'\n'} and 
                            scanning the QR Code to the {'\n'}
                            scanner to enter the establishment and 
                            may able to sit inside the train and drop 
                            in the specific place.
                        </Text>
                    </View>
                </View>
            </View>

            {/* Second Row */}
            <View style={styles.row2}>
                <Text style={[styles.text, { color: 'black', textAlign: 'left' }]}>Developers</Text>
                <View style={styles.imageContainer}>
                    {/* First row of images */}
                    <View style={styles.imageRow}>
                        <View style={styles.imageAndText}>
                            <Image source={require('../../assets/cute.png')} style={styles.image} />
                            <Text style={styles.imageText}>M. Broqueza</Text>
                        </View>
                        <View style={styles.imageAndText}>
                            <Image source={require('../../assets/escri.png')} style={styles.image} />
                            <Text style={styles.imageText}>J. Escribal</Text>
                        </View>
                        <View style={styles.imageAndText}>
                            <Image source={require('../../assets/feli.png')} style={styles.image} />
                            <Text style={styles.imageText}>F. Magsombol</Text>
                        </View>
                    </View>
                    {/* Second row of images */}
                    <View style={styles.imageRow}>
                        <View style={styles.imageAndText}>
                            <Image source={require('../../assets/rhia.png')} style={styles.image} />
                            <Text style={styles.imageText}>M. Quiambao</Text>
                        </View>
                        <View style={styles.imageAndText}>
                            <Image source={require('../../assets/angelo.png')} style={styles.image} />
                            <Text style={styles.imageText}>A. Robles</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    row: {
      marginTop: 10,
        marginBottom: 5,
        width: '90%',
    },
    row2: {
        marginBottom: 20,
        width: '90%',
        marginTop: 5,
    },
    projectdesc: {
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        backgroundColor: '#365486',
        padding: 10,
        borderRadius: 17,
    },
    cardRow: {
        marginBottom: 10,
        width: '100%',
    },
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    imageContainer: {
        marginTop: 10,
    },
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10,
    },
    imageAndText: {
        alignItems: 'center',
    },
    image: {
        width: 100, // Adjust width as needed
        height: 100, // Adjust height as needed
        resizeMode: 'contain',
    },
    imageText: {
        color: 'black',
        marginTop: 5,
    },
});
